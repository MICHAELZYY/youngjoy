<template>
  <div>
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
import tags from '@/components/tags'

export default {
  name: "tags",
  data() {
    return {
      msg: "hello man",
      html_test: "<div> html_ test</div>"
    };
  },
};
</script>

<style lang="stylus" scoped>
.el-header {
  background-color: #409EFF;
  color: #333;
  text-align: center;
  line-height: 60px;
  margin-bottom: 100px;
}

.el-aside {
//   background-color: #D3DCE6;
  color: #333;
//   text-align: center;
//   line-height: 200px;
}

ul > li {
    margin:5px 0px;
    display:inline;
    list-style-type:none;
    white-space:nowrap;
}

.el-main > .el-row > .el-col {
  text-align: left;
  margin-left: 50px;
  line-height: 30px;
}

body > .el-container {
  margin-bottom: 00px;
}

.el-pagination {
  line-height: 60px;
//   margin-bottom: 100px;
}
</style>