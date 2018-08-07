<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script>
import Vue from 'vue';
import Vant from 'vant';
Vue.use(Vant);
export default {
  name: 'App'
}
</script>

<style>
@import url('vant/lib/vant-css/index.css');
#app {
  font-family: 'Microsoft YaHei';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #666;
  margin: auto;
}
.router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
.router-fade-enter, .router-fade-leave-active {
    opacity: 0;
}
a:focus,a:hover{
  text-decoration: none;
}
</style>
