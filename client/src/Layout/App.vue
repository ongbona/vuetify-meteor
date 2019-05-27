<template>
  <div>
    <h1>Hello to data is {{date}}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      date: new Date(),
    };
  }
}
</script>