<template lang="pug">

	footer.page-footer
	  .page-footer__content
	    .col--tablet-10.p-padding--2
	      p.page-footer__title Blogs que aceitam guest post
	      p.page-footer__text
	        | Cansado de escrever posts sozinhos para o seu blog? Não aguenta mais não ter contato com outros blogueiros da internet? Morrendo de curiosidade para saber quais outros blogs aceitariam um post seu? Quer que outras pessoas escrevam para seu blog?
	      p.page-footer__text
	        | Seus problemas acabaram!
	    .col--tablet-6.p-padding--2
	      p.page-footer__title Principais links
	      ul.page-footer__list
	        li.page-footer__list__item
	          a.page-footer__link(href='') Adicionar blog
	        li.page-footer__list__item
	          a.page-footer__link(href='https://github.com/iloveblogs/guest-post') Fork no github
	        li.page-footer__list__item
	          a.page-footer__link(href='') Contato
	        li.page-footer__list__item
	          a.page-footer__link(href='https://github.com/iloveblogs/guest-post/issues') Reportar bug
	        li.page-footer__list__item
	          a.page-footer__link(href='') Nossa proposta
	        li.page-footer__list__item
	          a.page-footer__link(href='') Próximas novidades
	    .col--tablet-8.p-padding--2
	      p.page-footer__title Assine a newsletter
	      p.page-footer__text Deixe o email e não perca novidades na lista de blogs.
	      span.input-box.input-box--is-default.p-width-100.p-padding-left-0
	        input.input-box__input(type='text', placeholder='Adicione seu email')
	        i.fa.fa-envelope-o.input-box__icon
	  .page-footer__subfooter
	    p.page-footer__text
	      a.page-footer__link(href='http://iloveblogs.github.io')
	        img.page-footer__subfooter__icon
	      a.page-footer__link(href='https://github.com/iloveblogs/guest-post')
	        i.fa.fa-github-alt.page-footer__subfooter__icon
	    p.page-footer__text
	      | I love blogs - 2017. Alguns direitos reservados.
	
</template>

<script>

export default {}
	
</script>

<style lang="sass">

@import "../../../style/global/global"

.page-footer
    background-color: #43484c
    color: #86939c
    font-size: 13px
    font-family: "Open Sans", sans-serif

    +element("content")
        color: #666
        margin: 0 auto
        max-width: 960px
        min-height: 40px
        +m-clearfix
        padding: spacing(1)

    +element("title")
        color: #fff
        font-size: 18px

    +element("text")
        line-height: 1.5

    +element("list")
        padding: 0

        +element("item")
            list-style: none
            padding: 0
            line-height: 2

    +element("link")
        color: #fff
        text-decoration: none
        padding-bottom: 2px
        border-bottom: 0
        &:hover
            text-decoration: underline

    +element("subfooter")
        padding: 24px
        margin: 0 auto
        background-color: hsl(207, 6%, 18%)
        text-align: center
        color: #fff
        +m-clearfix        

        +element("icon")
            width: 30px
            vertical-align: middle
            margin-right: spacing(1)
            font-size: 30px
	
</style>