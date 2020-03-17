<template>
  <div>
    <el-container>
    <el-aside width=100%>
      <div>标签云</div>
      <ul class="tags">
        <li>flask</li>
        <li>python</li>
        <li>vue</li>
        <li>flask</li>
        <li>python</li>
        <li>vue</li>e
        <li>flask</li>
        <li>python</li>
        <li>vue</li>
      </ul>
      <div></div>
      <div>热门文章</div>
      <div>评论功能</div>
    </el-aside>
    </el-container>
  </div>
  
</template>

<script>
export default {
  name: "blogSidebar"
};
</script>

<style>

ul > li {
    /* text-align: left; */
    /* margin:5px 0px; */
    /* display:inline; */
    list-style-type:none;
    /* white-space:nowrap; */
    float: left;
    margin: 10px 10px 3px 8px

}

.el-aside{
    width: 100%;
}

</style>