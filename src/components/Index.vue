<template>
  <div class='main'>
    <el-container>
      <el-main>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">
              <div>标题1</div>
              今天是个好天气
            </div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
            <el-divider></el-divider>
          </el-col>
          <el-col :span="24">
            <div class="grid-content bg-purple-dark">今天是个好天气</div>
          </el-col>
        </el-row>
      </el-main>
      <el-aside width="20%">
          <div>标签云</div>
          <ul class='tags'>
              <li >flask</li>
              <li>python</li>
              <li>vue</li>
          </ul>
          <ul>
              <li></li>
          </ul>
      </el-aside>
    </el-container>

    <el-container>
      <el-footer>
    <el-pagination background layout="prev, pager, next" :total="1000"></el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import tags from '@/components/tags'

export default {
  name: "Index",
  data() {
    return {
      msg: "hello man",
      html_test: "<div> html_ test</div>"
    };
  },
};
</script>

<style lang="stylus" scoped>
.main{
  display: block;
  margin:0 auto;
  width: 70%;
  background-color: rgb(179, 226, 10);
}

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