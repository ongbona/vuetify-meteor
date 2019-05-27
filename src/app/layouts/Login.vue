<template>
  <v-app
    id="login"
    class="rabbit"
  >
    <router-view></router-view>
  </v-app>
</template>
<script>
export default {
  name: 'Login',
  // methods: {
  //   login() {
  //     this.loading = true
  //     setTimeout(() => {
  //       this.$router.push('home')
  //     }, 1000)
  //   },
  // },
}
</script>
<style lang="scss" scoped >
.rabbit {
  background-color: #f47321 !important;
  color: white;
}
#login {
  height: 50%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  content: '';
  z-index: 0;
}
</style>