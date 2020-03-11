<template>
  <div class='layout'>
      <router-view name='header'/>
      <router-view name='main'/>
      <router-view name='footer'/>
      <router-view/>

  </div>
</template>

<script>
export default {
    name: "Layout"
}
</script>

<style>
.layout{
  padding:0%
}
</style>