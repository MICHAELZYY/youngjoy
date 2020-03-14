<template>
  <div class='layout'>
      <router-view name='header'/>
      <!-- <div style="text-align:center"> 轮播图放置区域 </div> -->
      <div class='container'>
        <div class='main-container'><router-view name='main'/></div>
        <div class='sidebar-container'><router-view name='sidebar'/></div>
      </div>
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
.container{
  margin-top:0px;
  margin:0 auto;
  width: 70%;
}

.main-container{
  width: 73%;
  display:inline-block;
  /* background-color: #ffffff; */
  margin: 0px;
  padding: 0px;
}

.sidebar-container{
  vertical-align: top;
  margin-left: 1%;
  width: 25%;
  height: 500px;
  display:inline-block;
  background-color: #ffffff;
}

</style>