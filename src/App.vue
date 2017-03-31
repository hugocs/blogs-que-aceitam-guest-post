<template>

  <div> 
    <jumbotron></jumbotron>
    
    <div class="u-clearfix blog-list__flex-grid" style="display: flex; flex-wrap: wrap; background-color: #e8e8e8;">      
      
      <div v-if="blogs.length < 1"> Carregando blogs </div>

      <blog-box       
        :blog="blog" 
        v-for="(blog, index) in blogs"
        v-bind:data="blog"
        v-bind:key="blog.id"
        class="blog-box--medium-size"
        v-else
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
  import Firebase from "firebase";

  let config = {
    apiKey: "AIzaSyAyftn2w-vEVT1W2d86wi9eM5UXcEkWxz0",
    authDomain: "blogs-que-aceitam-guest-post.firebaseapp.com",
    databaseURL: "https://blogs-que-aceitam-guest-post.firebaseio.com",
    storageBucket: "blogs-que-aceitam-guest-post.appspot.com",
    messagingSenderId: "1009371204499"
  };

  let app = Firebase.initializeApp(config);
  let db = app.database();

  let blogsRef = db.ref("blogs");

  export default {

    firebase: {
      blogs: blogsRef
    },

    components: {
      'jumbotron': Jumbotron,
      'page-footer': Footer,
      'blog-box': BlogBox
    },
  
    data () {
      var data = {};          

      return data;
    }
  }


</script>

<style lang="sass"> 
</style>
