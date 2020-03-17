<template>

  <div class='content'>
    <header class='article-header'><h1 class='article-title'>markdown编辑格式</h1></header>
    <pre v-highlightjs="sourcecode"><code class="javascript"></code></pre>

<!-- If you want to highlight hardcoded source-code -->
const s = new Date().toString()
<pre v-highlightjs>const s = new Date().toString()</pre>
<pre v-highlightjs><code class="javascript">const s = new Date().toString()</code></pre>
      <div class='article-content' v-html="this.article_html"></div>
      <!-- 文章尾部 相关文章 上下文章 -->
      <!-- 评论版块 -->
  </div>
</template>

<script>
export default {
    name: 'Article',
    data() {
      return {
        article_html: '',
      }
    },

  created() {
    this.getArticle()
  },

  methods: {
      getArticle() {
        this.$api.article.articleList(    
            ).then(res=> {
            console.log(res.data);
            this.article_html = res.data['body'];     
        })    
      }
    }

}


</script>

<style>

.content {
  text-align: center;
  background-color: #ffffff;
}

.article-content {
  margin: 50px;
  padding: 10px;
  text-align: left;
  line-height: 24px;
  font-size: 14px
  /* font: 15px "Microsoft YaHei", Arial, Helvetica, sans-serif; */
  /* color: #333; */
  /* overflow: hidden; */
   /* overflow:auto; */
}

code {
  word-wrap:break-word; 
  word-break:break-all; 
}

</style>