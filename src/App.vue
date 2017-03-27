<template>

  <div> 
    <jumbotron></jumbotron>
    
    <div class="u-clearfix blog-list__flex-grid" style="display: flex; flex-wrap: wrap; background-color: #e8e8e8;">      
      
      <blog-box       
        :blog="blog" 
        v-for="(blog, index) in blogs"
        v-bind:data="blog"
        v-bind:key="blog.id"
        class="blog-box--medium-size"
        ></blog-box>      
    </div>

    <page-footer></page-footer>
  </div>



</template>

<script>
  
  import Jumbotron from "./components/shared/jumbotron/Jumbotron.vue";
  import Footer from "./components/shared/footer/Footer.vue";
  import BlogBox from "./components/shared/blog-box/BlogBox.vue";
  import Blogs from "./data/data.json";

  export default {

    components: {
      'jumbotron': Jumbotron,
      'page-footer': Footer,
      'blog-box': BlogBox
    },
  
    data () {
      var data = {
        blogs: Blogs
      };          

      return data;
    }
  }


</script>

<style lang="sass"> 
</style>
