<template>

  <div> 

  <jumbotron></jumbotron>
  <page-footer></page-footer>

  </div>

</template>

<script>
  
  import Jumbotron from "./components/shared/jumbotron/Jumbotron.vue";
  import Footer from "./components/shared/footer/Footer.vue";

  export default {

    components: {
      'jumbotron': Jumbotron,
      'page-footer': Footer
    },
  
    data () {
      var data = {
        message: "Teste"
      };
      return data;
    }
  }


</script>

<style lang="sass"> 
</style>
