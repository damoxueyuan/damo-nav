<template>
  <div id="app">
    <header-box></header-box>
    <section id="content">
      <left-bar></left-bar>
      <router-view/>
    </section>
  </div>
</template>

<script>
import HeaderBox from "@/components/header-box";
import LeftBar from "@/components/left-bar";
export default {
  components: {
    HeaderBox,
    LeftBar
  },
  name: 'App'
}
</script>

<style>
a,a:hover{
  text-decoration:none;
}
</style>
