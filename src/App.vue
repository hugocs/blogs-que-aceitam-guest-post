<template>

  <div> 

  <jumbotron></jumbotron>

  </div>

</template>

<script>
  import Jumbotron from "./components/shared/jumbotron/Jumbotron.vue";

  export default {

    components: {
      'jumbotron': Jumbotron
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
