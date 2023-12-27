jQuery(document).ready(function($){
  

/* Tout est encapsulé dans un "each" pour bien appliquer les modifications sur chaque article un après l'autre */

	$('#dc_blog article').each(function(){


	/* On regroupe le titre et les meta dans un même div */

		$('.entry-title, .post-meta', this).wrapAll('<div class="title_plus_meta">');


	/* Position top de ce div au survol */
	
		$('#dc_blog article').mouseenter(function () {
			$('.title_plus_meta', this).stop().animate({
				top: '20px'
			}, 400)	
		});


	/* Position top de ce div lors du retour à la normale après survol */

		$('#dc_blog article').mouseleave(function () {
			$('.title_plus_meta', this).stop().animate({
				top: $('.entry-featured-image-url').height() - $('.title_plus_meta').height() - 20 + 'px',
			}, 400)	
		});


	/* Position top de l'extrait au survol */	

		$('#dc_blog article').mouseenter(function () {
			$('.post-content', this).css({visibility: 'visible'}).stop().animate({
				top: $('.entry-featured-image-url').height() - $('.post-content').height() - 20 + 'px',
				opacity: '1',
			}, 500)	
		});		


	/* Position top de l'extrait lors du retour à la normale après survol */

		$('#dc_blog article').mouseleave(function () {
			$('.post-content', this).css({visibility: 'hidden'}).stop().animate({
				top: $('.entry-featured-image-url').height() + 20 + 'px',
				opacity: '0',
			}, 500)	
		});				


	}); /* End each */


	/* Intitulé du bouton "lire plus" */
	$('#dc_blog .more-link', this).html( 'Lire l\'article' );

    
}); /* End fonction principale */