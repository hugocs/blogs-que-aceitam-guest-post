<template>

  <div> 
    <jumbotron></jumbotron>
    
    <div class="u-clearfix">
      <div class="col--tablet-8 p-padding--2" v-for="blog in blogs">
        <blog-box :blog="blog"></blog-box>      
      </div>      
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
        blogs: Blogs.feed.entry
      };          

      console.log(data.blogs[0]);

      return data;
    }
  }


</script>

<style lang="sass"> 
</style>
