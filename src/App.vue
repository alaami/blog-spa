<template>
  <div id="app">
    <Nav />
    <router-view/>
    <Footer />
  </div>
</template>
<script lang="ts">
import Nav from './components/commun/Nav.vue';
import Footer from './components/commun/Footer.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
    components: {
Nav,Footer
  },
})
export default class App extends Vue{
//public msg: string = '';


}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>