import Vue from "vue";
import { VueSSR } from "meteor/akryum:vue-ssr";
import createApp from "./app";

// // This will be called each time the app is rendered
// VueSSR.createApp = function(context) {
//   // since there could potentially be asynchronous route hooks or components,
//   // we will be returning a Promise so that the server can wait until
//   // everything is ready before rendering.
//   return new Promise((resolve, reject) => {
//     const { app, router, store } = createApp({
//       ssr: true
//     });

//     // set server-side router's location
//     router.push(context.url);

//     // wait until router has resolved possible async components and hooks
//     router.onReady(() => {
//       const matchedComponents = router.getMatchedComponents();
//       // no matched routes, reject with 404
//       if (!matchedComponents.length) {
//         return reject({ code: 404 });
//       }

//       // This `rendered` hook is called when the app has finished rendering
//       context.rendered = () => {
//         // After the app is rendered, our store is now
//         // filled with the state from our components.
//         // When we attach the state to the context, and the `template` option
//         // is used for the renderer, the state will automatically be
//         // serialized and injected into the HTML as `window.__INITIAL_STATE__`.
//         context.state = store.state;
//       };

//       // the Promise should resolve to the app instance so it can be rendered
//       resolve(app);
//     }, reject);
//   });
// };






VueSSR.createApp = function(context) {
  // Wait with sending the app to the client until the promise resolves (thanks Akryum)
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp({
      ssr: true
    });

    // 1. Resolve the URL with the router
    router.push(context.url);

    router.onReady(async () => {
      // 2, Fetch any matching components from the router
      const matchedComponents = router.getMatchedComponents();

      const route = router.currentRoute;

      // No matched routes
      if (!matchedComponents.length) {
        reject(new Error("not-found"));
      }

      // 3. Filter out components that have no asyncData
      const componentsWithAsyncData = matchedComponents.filter(
        component => component.asyncData
      );

      // 4. Map the components into a list of promises
      // by returning the asyncData method's result
      const asyncDataPromises = componentsWithAsyncData.map(component =>
        component.asyncData({ store, route })
      );

      // You can have the asyncData methods resolve promises with data.
      // However to avoid complexity its recommended to leverage Vuex
      // In our case we're simply calling Vuex actions in our methods
      // that do the fetching and storing of the data. This makes the below
      // step really simple

      // 5. Resolve all promises. (that's it)
      await Promise.all(asyncDataPromises);

      // From this point on we can assume that all the needed data is stored
      // in the Vuex store. Now we simply need to grap it and push it into
      // the HTML as a "javascript string"

      // 6. Store the data in the HTML for later hydration of the client bundle
      const js = `window.__INITIAL_STATE__=${JSON.stringify(store.state)};`;

      // Resolve the promise with the same object as the simple version
      // Push our javascript string into the resolver.
      // The VueSSR package takes care of the rest
      resolve({
        app,
        js
      });
    });
  });
};
