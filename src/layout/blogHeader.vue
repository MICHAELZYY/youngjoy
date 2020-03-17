<template>
  <div class='headbar'>
    <div class='header'>
     <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" id="title"><router-link to='/index' class='nav'>Young Joy`s Home</router-link></div>
          </el-col>
          <el-col :span="4"><router-link to='/index' class='nav'>首页</router-link></el-col>
          <el-col :span="4"><router-link to='/tags' class='nav'>标签</router-link></el-col>
          <el-col :span="4"><router-link to='/life' class='nav'>生活</router-link></el-col>
        </el-row>
      </el-header>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
    name: "blogHeader"
}
</script>

<style>
/* .header{
  height: 100px;
  text-align: center
} */

.headbar {
  /* background-color: #ffffff; */
  background: #1C2327;
  line-height: 60px;
  height: 100%;
  margin-bottom: 20px;
}

.headbar > .header {
  text-decoration: none;
  font-size: 150%;
  text-align: left;
  color: #ffffff;
  width: 60%;
  display: block;
  margin: 0 auto;
}

.headerbar::before {
    background: #000 linear-gradient(to left, #4cd964, #5ac8fa, #007aff, #34aadc, #5856d6, #ff2d55);
    content: "";
    height: 5px;
    position: absolute;
    top: 0;
    width: 100%;
}

.nav {
  color: #ffffff;
  text-decoration: none;
}

</style>