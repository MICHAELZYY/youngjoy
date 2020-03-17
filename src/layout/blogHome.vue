<template>
  <div class='content-wrap'>
    <article class='excerpt'>
      <header><h2>
      <a class="label label-important" href="https://cuiqingcai.com/category/technique/python">Python<i class="label-arrow"></i></a>
        <router-link to='/article/1'>hello world</router-link></h2></header>
      <div class='focus'><a href="">
        <img src="./../assets/test_pic.jpg" alt="">
        </a></div>
      <span class='note'>置里面可能还需要设置一些变量开关，如设置调试开关、日志开关、功能开关等等。 这些变量其实就是在项目运行时我们给项目设置的一些参数。这些参数一般情况来说，可以有两种设置方法，</span>
      <p class='auth-span'>
        <span class='muted'>hai</span>
        <span class='muted'>heill</span>
        <span class='muted'>hhh</span>
        <span class='muted'>12233</span>
      </p>
    </article>
    <article class='excerpt'>
      <header><h2>
      <a class="label label-important" href="https://cuiqingcai.com/category/technique/python">Python<i class="label-arrow"></i></a>
        <router-link to='/article/1'>hello world</router-link></h2></header>
      <div class='focus'><a href="">
        <img src="./../assets/test_pic.jpg" alt="">
        </a></div>
      <span class='note'>置里面可能还需要设置一些变量开关，如设置调试开关、日志开关、功能开关等等。 这些变量其实就是在项目运行时我们给项目设置的一些参数。这些参数一般情况来说，可以有两种设置方法，</span>
      <p class='auth-span'>
        <span class='muted'>hai</span>
        <span class='muted'>heill</span>
        <span class='muted'>hhh</span>
        <span class='muted'>12233</span>
      </p>
    </article>
    <article class='excerpt'>
      <header><h2>
      <a class="label label-important" href="https://cuiqingcai.com/category/technique/python">Python<i class="label-arrow"></i></a>
        <router-link to='/article/1'>hello world</router-link></h2></header>
      <div class='focus'><a href="">
        <img src="./../assets/test_pic.jpg" alt="">
        </a></div>
      <span class='note'>置里面可能还需要设置一些变量开关，如设置调试开关、日志开关、功能开关等等。 这些变量其实就是在项目运行时我们给项目设置的一些参数。这些参数一般情况来说，可以有两种设置方法，</span>
      <p class='auth-span'>
        <span class='muted'>hai</span>
        <span class='muted'>heill</span>
        <span class='muted'>hhh</span>
        <span class='muted'>12233</span>
      </p>
    </article>
    <article class='excerpt'>
      <header><h2><router-link to='/article/1'>hello world</router-link></h2></header></h2></header>
      <div class='focus'><a href=""><img src="./../assets/test_pic.jpg" alt=""></a></div>
      <span class='note'>在运行一个项目的时候，我们经常会遇到设置不同环境的需求，如设置是开发环境、测试环境还是生产环境，或者在某些设置里面可能还需要设置一些变量开关，如设置调试开关、日志开关、功能开关等等。 这些变量其实就是在项目运行时我们给项目设置的一些参数。这些参数一般情况来说，可以有两种设置方法，</span>
      <p class='auth-span'>
        <span class='muted'>hai</span>
        <span class='muted'>heill</span>
        <span class='muted'>hhh</span>
        <span class='muted'>12233</span>
      </p>
    </article>
  </div>
</template>

<script>


export default {
  name: "blogHome",
  data() {
    return {
      msg: "hello man",
      html_test: "<div> html_ test</div>"
    };
  },
};
</script>

<style lang="stylus" scoped>

.content-wrap{
  margin:0px;
}

.excerpt {
    background-color: #fff;
    padding: 20px 15px 30px 20px;
    margin-bottom: 10px;
    position: relative;
    clear: both;
    overflow: hidden;
}

.excerpt .focus {
    float: left;
    margin: 0 20px 0 0;
    text-align: center;
    position: relative;
    overflow: hidden;
    display: table;
}

.excerpt header .label {
    margin-right: 5px;
    position: relative;
    top: -2px;
    padding: 2px 6px 4px;
    background-color: #d9534f;
    color: #ffffff;
}

.excerpt p.auth-span {
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
}

.excerpt .muted {
    font-size: 13px;
    margin-right: 20px;

}
p {
    margin: 0 0 10px;
}

a {
    color: #00a67c;
    text-decoration: none;
}
</style>