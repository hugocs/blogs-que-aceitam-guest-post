<template>

	<footer class="page-footer">
	    <div class="page-footer__content">
	        <div class="col--tablet-10 p-padding--2">
	            <p class="page-footer__title">Blogs que aceitam guest post</p>
	            <p class="page-footer__text">
	                Cansado de escrever posts sozinhos para o seu blog? Não aguenta mais não ter contato com outros blogueiros da internet? Morrendo de curiosidade para saber quais outros blogs aceitariam um post seu? Quer que outras pessoas escrevam para seu blog?
	            </p>
	            <p class="page-footer__text">
	                Seus problemas acabaram!
	            </p>
	        </div>
	        <div class="col--tablet-6 p-padding--2">
	            <p class="page-footer__title">Principais links</p>
	            <ul class="page-footer__list">
	                <li class="page-footer__list__item">
	                    <a href="" class="page-footer__link">Adicionar blog</a>
	                </li>
	                <li class="page-footer__list__item">
	                    <a href="https://github.com/iloveblogs/guest-post" class="page-footer__link">Fork no github</a>
	                </li>
	                <li class="page-footer__list__item">
	                    <a href="" class="page-footer__link">Contato</a>
	                </li>
	                <li class="page-footer__list__item">
	                    <a href="https://github.com/iloveblogs/guest-post/issues" class="page-footer__link">Reportar bug</a>
	                </li>
	                <li class="page-footer__list__item">
	                    <a href="" class="page-footer__link">Nossa proposta</a>
	                </li>
	                <li class="page-footer__list__item">
	                    <a href="" class="page-footer__link">Próximas novidades</a>
	                </li>
	            </ul>
	        </div>
	        <div class="col--tablet-8 p-padding--2">
	            <p class="page-footer__title">Assine a newsletter</p>
	            <p class="page-footer__text">Deixe o email e não perca novidades na lista de blogs.</p>
	            <span class="input-box input-box--is-default p-width-100 p-padding-left-0">
	                <input type="text" placeholder="Adicione seu email" class="input-box__input">
	                <i class="fa fa-envelope-o input-box__icon"></i>
	            </span>
	        </div>
	    </div>
	    <div class="page-footer__subfooter">
	        <p class="page-footer__text">

	            <a href="http://iloveblogs.github.io" class="page-footer__link">
	                <img src="images/ilove-blogs-logo.png" class="page-footer__subfooter__icon">
	            </a>

	            <a href="https://github.com/iloveblogs/guest-post" class="page-footer__link">
	                <i class="fa fa-github-alt page-footer__subfooter__icon"></i>
	            </a>
	        </p>
	        <p class="page-footer__text">
	            I love blogs - 2016. Alguns direitos reservados.
	        </p>
	    </div>
	</footer>

	
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