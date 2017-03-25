<template>
	<div class='blog-box'>
	    <div class="blog-box__body">
	        <h3 class='blog-box__title'>{{ blog.gsx$urldoblog.$t }}</h3>
	        <p class='blog-box__description' v-if="blog['gsx$faleumpoucosobreoseublog.']">
	        	{{ blog['gsx$faleumpoucosobreoseublog.'].$t }}
	        </p>
	    </div>
	    <footer class='blog-box__footer'>
	        
	        <a  :href='blog.gsx$urldoblog.$t'
	            class='blog-box__link'
	            target="_blank">{{blog.gsx$urldoblog.$t}}</a>

	        <span class="p-float-right">
	            <i class='blog-box__icon-like fa fa-heart' title='Curtir esse blog'></i>
	        </span>
	    </footer>
	</div>
</template>
<script>
	
	export default {

		props: ['blog']

	}


</script>
<style lang="sass">
@import "../../../style/global/global"

.blog-box
    box-shadow: 0 2px 1px rgba(170, 170, 170, .25)
    background-color: #fff
    border-radius: 8px
    cursor: pointer
    position: relative

    &:hover
        transform: scale(1.025)

    +element("title")
        font-size: 16px
        display: none

    +element("body")
        padding: spacing(2) spacing(2) 0 spacing(2)
        flex: 1 0 auto

    +element("link")
        color: inherit
        display: inline-block
        max-width: calc(100% - 20px)
        overflow: hidden
        text-decoration: none
        text-overflow: ellipsis
        vertical-align: middle
        white-space: nowrap
        word-wrap: normal
        padding: spacing(2) 0 spacing(2) spacing(2)
        border: 0

        &:hover
            color: #247ba0

    +element("description")
        font-size: 13px
        color: #666

    +element("footer")
        padding: 0
        border-top: 1px solid #eee
        color: #666
        font-size: 12px
        min-height: 45px

    +element("icon-like")
        float: right
        cursor: pointer
        transition: all ease-in .5s
        color: #999
        vertical-align: middle
        padding: spacing(2)
        position: relative
        top: 3px // ajuste arbitrário :(

        &:hover
            color: #ff1654
            animation: pulse .5s infinite alternate ease-in	

</style>