<template>
  <div id="app">
    <router-view></router-view>
    <HohuluFooter></HohuluFooter>
  </div>
</template>

<script>
import HohuluFooter from './components/common/hohulu-footer'

export default {
  name: "app",
  components: {
    HohuluFooter
  }
};
</script>

<style>
body,ul{
  margin: 0px;
  padding: 0px;
}
ul{
  list-style: none;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  max-width: 1300px;
  margin: 0 auto;
}
</style>
