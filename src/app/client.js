import "intersection-observer";

import { Meteor } from "meteor/meteor";
import createApp from "./app";

Meteor.startup(() => {
  const { app, router, store } = createApp({
    ssr: false
  });

  if (window.__INITIAL_STATE__) {
    // We initialize the store state with the data injected from the server
    store.replaceState(window.__INITIAL_STATE__);
  }

  // // wait until router has resolved all async before hooks
  // // and async components...
  // router.onReady(() => {
  //   app.$mount("#app");
  // });
});
