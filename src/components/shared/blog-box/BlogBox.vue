<template lang="pug">
    
    .blog-box
      .blog-box__body
        h3.blog-box__title {{ blog.url }}
        p.blog-box__description(v-if='blog.descricao')
          | {{ blog.descricao }}
      footer.blog-box__footer
        a.blog-box__link(:href='blog.url', target='_blank') {{blog.url}}

</template>
<script>
	
	export default {

		props: ['blog']

	}


</script>
<style lang="sass">
@import "../../../style/global/global"

.blog-box
    box-sizing: border-box
    background-color: #fff
    margin: spacing(1)
    border-radius: 4px
    display: flex
    flex-direction: column
    
    +modifier("medium-size")
        width: calc(100% - 20px)
        
        +from-breakpoint("tablet")
            width: calc(50% - 20px)
        
        +from-breakpoint("desktop")
            width: calc(25% - 20px)

    +element("title")
        font-size: 16px        
        margin-bottom: 10px
        color: #222
        +m-text-ellipsis
        
    +element("body")
        padding: spacing(2)
        flex-grow: 1
        margin: spacing(1) 0
        font-family: "Open Sans", sans-serif
        font-size: 14px
        color: #333
        max-height: 130px
        overflow: hidden

    +element("link")
        &:hover
            color: #247ba0

    +element("description")

    +element("footer")
        border-top: 1px solid #d8d8d8
        padding: spacing(2)
        +m-text-ellipsis

</style>