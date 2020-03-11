<template>
  <div class='header'>
     <el-container>
      <el-header>
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple" id="title">Young Joy`s Home</div>
          </el-col>
          <el-col :span="4"><router-link to='/index'>首页</router-link></el-col>
          <el-col :span="4"><router-link to='/tags'>标签</router-link></el-col>
          <el-col :span="4">生活</el-col>
        </el-row>
      </el-header>
    </el-container>
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

.header {
  background-color: #409EFF;
  color: #333;
  text-align: center;
  font-size: 150%;
  line-height: 100px;
  height: 100px;
  /* margin-bottom: 100px; */
}

</style>