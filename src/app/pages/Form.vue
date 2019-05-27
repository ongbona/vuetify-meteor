<template>
  <div>
    <h3>Get Employees</h3>
    <div v-if="employee && employee.name">{{employee}}</div>
    <div v-else>Loading...</div>

    <h3>Counter</h3>
    {{counter}}
    <button @click="increaseCounter">Increase</button>
  </div>
</template>

<script>
export default {
  name: "Form",
  computed: {
    employee() {
      return this.$store.state.app.test.employee;
    },
    counter() {
      return this.$store.state.app.test.counter;
    }
  },
  serverPrefetch() {
    console.log("serverPrefetch");
    return this.getEmployee();
  },
  // asyncData({ store }) {
  // console.log("asyncData");
  // return this.getEmployee();
  // },
  mounted() {
    // console.log("mounted");
    this.getEmployee();
  },
  methods: {
    getEmployee() {
      // this.dataPromise.then(res=>{
      //   console.log('hi');
      // })
      console.log(this.$store.dispatch("app/test/getEmployee"));
    },
    increaseCounter() {
      this.$store.dispatch("app/test/increaseCounter", 1);
    }
  }
};
</script>
