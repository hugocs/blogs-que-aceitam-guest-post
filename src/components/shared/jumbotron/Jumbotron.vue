<template>
	<div class="jumbotron">
	    <div class="jumbotron__content">
	        <h1 class="jumbotron__title">Blogs que aceitam guest post</h1>
	        <h2 class="jumbotron__subtitle">
	            Queremos ser a maior lista brasileira de blogs que aceitam guest post.
	        </h2>
	        <a href="/sobre" class="jumbotron__main-link">Conheça nossa proposta.</a>
	        <span class="input-box input-box--is-extra-large">
	            <input type="text" placeholder="Encontre um blog" class="input-box__input">
	            <i class="fa fa-search input-box__icon"></i>
	        </span>
	    </div>
	</div>
</template>

<script>

	export default {

		data(){
			var data = {
				teste: "Testando o jumbotron"
			};
			return data;
		}
	}

</script>
<style lang="sass">

  @import "../../../style/global/global"

  .jumbotron
    text-align: center
    font-weight: 400
    color: #fff
    font-family: "Open Sans", sans-serif
    background-image: url("http://guest-post.surge.sh/images/crowd-people-pattern.jpg")
    position: relative
    z-index: 10
    padding-top: 54px

    &:before
      content: ""
      width: 100%
      height: 100%
      display: block
      background-color: rgba(28, 131, 176, 0.75)
      position: absolute
      z-index: 20
      top: 0

    +element("content")
      max-width: 960px
      margin: 0 auto
      padding: 32px 16px
      z-index: 30
      position: relative

    +element("title")
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5)
      margin: 0
      padding: 16px 8px
      font-size: 25px
      font-weight: 800

      +from-breakpoint("tablet")
        font-size: 50px
        padding: 24px 16px

    +element("subtitle")
      font-size: 13px
      font-weight: 100
      margin: 0
    
      +from-breakpoint("tablet")
        font-size: 16px

    +element("main-link")
      margin-top: 8px
      color: #fff
      font-size: 13px
      display: block
      text-decoration: underline
      border: 0

      +from-breakpoint("tablet")
        font-size: 16px


	
</style>