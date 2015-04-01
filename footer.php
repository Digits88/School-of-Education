<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 * @package WordPress
 * @subpackage CALSv1
 * @since CALS 1.0
 */
?>

	</div><!-- #main -->

	<footer id="colophon" role="contentinfo">
		<div class="inner">
		
        
	        <div class="copyright">
	        	<img src="<?php echo get_template_directory_uri(); ?>/images/uwlogo_small.png" alt="University of Wisconsin Madison" />
				<div class="uwaddress">
					<h4>University of Wisconsin - School of Education</h4>
					<address>
							<span>MERIT • 368 Teacher Education Building</span>
							<span class="bullet_img">Madison WI</span>
							<span class="bullet_img">53706</span>
					</address>
					<div class="phone">
						<span>Phone: (608) 263-4750</span>
						<!-- <span class="bullet_img"></span> -->
					</div>
	        		<div class="copyrightline">&copy; 2015.  Board of Regents of the University of Wisconsin System.</div>
				</div>
	        </div>
	        
	        <div class="navcornerleft"></div>
	        <div class="navcornerright"</div> 
	        <div class="clearfix"></div>
		</div>
			
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>