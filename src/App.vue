<template><HomeView /></template>
<script>
import HomeView from "@/views/HomeView.vue";
export default {
  components: {
    HomeView,
  },
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
:root {
  --bg-orange: #f86642;
  --bg-black: #292526;
  --bg-white: #f6f6f6;
}
a,
h1,
h2,
h3,
span,
div,
button,
.placeholder {
  font-family: "Cairo", sans-serif;
}
</style>
