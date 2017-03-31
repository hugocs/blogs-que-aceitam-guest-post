<template>

  <div> 
    <jumbotron></jumbotron>
    
    <div class="u-clearfix blog-list__flex-grid" style="display: flex; flex-wrap: wrap; background-color: #e8e8e8;">      
      
      <form v-on:submit.prevent="addBlog">
        <div>
          <label for="nome">Nome do blog</label>
          <input type="text" id="nome" v-model="newBlog.nome">
        </div>
        <div>
          <label for="url">Url do blog</label>
          <input type="text" id="url" v-model="newBlog.url">
        </div>
        <div>
          <label for="descricao">Descreva seu blog brevemente</label>
          <input type="text" id="descricao" v-model="newBlog.descricao">
        </div>
        <div>
          <label for="categorias">Que categorias aceitam guest post?</label>
          <input type="text" id="categorias" v-model="newBlog.categorias">
        </div>
        <div>
          <label for="regras">Regras para postagem</label>
          <input type="text" id="regras" v-model="newBlog.regras">
        </div>        
        <div>
          <label for="email_contato">Email para contato</label>
          <input type="text" id="email_contato" v-model="newBlog.email_contato">
        </div>
        <input type="submit" value="Adicionar blog">
      </form>

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
      
      var data = {
        newBlog: {
          nome: "",
          categorias: "",
          email_contato: "",
          regras: "",
          url: "",
          data_entrada: (new Date()).toString(),
        }
      };          

      return data;
    },
    methods: {
      addBlog: function(){
        blogsRef.push(this.newBlog);
        alert("Blog adicionado");
      }
    }
  }


</script>

<style lang="sass"> 
</style>
