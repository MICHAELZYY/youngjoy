<template>
  <div class='headbar'>
    <div class='header'>
     <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" id="title">Young Joy`s Home</div>
          </el-col>
          <el-col :span="4"><router-link to='/index'>首页</router-link></el-col>
          <el-col :span="4"><router-link to='/tags'>标签</router-link></el-col>
          <el-col :span="4"><router-link to='/life'>生活</router-link></el-col>
        </el-row>
      </el-header>
    </el-container>
    </div>
  </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style>
/* .header{
  height: 100px;
  text-align: center
} */

.headbar {
  background-color: #ffffff;
  line-height: 60px;
  height: 100%;
  margin-bottom: 20px;
}

.headbar > .header {
  font-size: 150%;
  text-align: left;
  color: #333;
  width: 70%;
  display: block;
  margin: 0 auto;
}

</style>