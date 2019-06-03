

jQuery(document).ready(function(){

// CRUK IMAGE GALLERY

  if (jQuery(".pane-fieldable-panels-pane").hasClass( "pane-bundle-cruk-image-gallery" )) {

    // Create variables for slides settings.
    var slidesDesktop = (Drupal.settings.cruk_image_gallery.slides_setting_desktop);
    var slidesTablet = (Drupal.settings.cruk_image_gallery.slides_setting_tablet);
    var slidesMobile = (Drupal.settings.cruk_image_gallery.slides_setting_mobile);

    // Create variables for arrows settings.
    var arrowsDesktop = (Drupal.settings.cruk_image_gallery.nav_arrows_setting_desktop == 'true');
    var arrowsTablet = (Drupal.settings.cruk_image_gallery.nav_arrows_setting_tablet == 'true');
    var arrowsMobile = (Drupal.settings.cruk_image_gallery.nav_arrows_setting_mobile == 'true');

    // Create variables for dots settings.
    var dotsDesktop = (Drupal.settings.cruk_image_gallery.nav_dots_setting_desktop == 'true');
    var dotsTablet = (Drupal.settings.cruk_image_gallery.nav_dots_setting_tablet == 'true');
    var dotsMobile = (Drupal.settings.cruk_image_gallery.nav_dots_setting_mobile == 'true');

    // Create variables for autoplay settings.
    var autoplayDesktop = (Drupal.settings.cruk_image_gallery.autoplay_setting_desktop == 'true');
    var autoplayTablet = (Drupal.settings.cruk_image_gallery.autoplay_setting_tablet == 'true');
    var autoplayMobile = (Drupal.settings.cruk_image_gallery.autoplay_setting_mobile == 'true');

    // Add classes to caption depending on chosen options.
    if (Drupal.settings.cruk_image_gallery.captions_setting_desktop == 'On') {
      jQuery('.caption_overlay').addClass('desktop');
    } else {
      jQuery('.caption_overlay').addClass('no_desktop');
    }
    if (Drupal.settings.cruk_image_gallery.captions_setting_tablet == 'On') {
      jQuery('.caption_overlay').addClass('tablet');
    } else {
      jQuery('.caption_overlay').addClass('no_tablet');
    }
    if (Drupal.settings.cruk_image_gallery.captions_setting_mobile == 'On') {
      jQuery('.caption_overlay').addClass('mobile');
    } else {
      jQuery('.caption_overlay').addClass('no_mobile');
    }

    var shineGallery = jQuery('.pane-bundle-cruk-image-gallery .pane-content .field-items');
    shineGallery.slick({
      arrows: arrowsDesktop,
      autoplay: autoplayDesktop,
      autoplaySpeed: 5000,
      centerMode: false,
      centerPadding: '0%',
      dots: dotsDesktop,
      draggable: false,
      fade: false,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: slidesDesktop,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: arrowsDesktop,
            autoplay: autoplayDesktop,
            autoplaySpeed: 5000,
            centerMode: false,
            centerPadding: '0%',
            dots: dotsDesktop,
            draggable: false,
            fade: false,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: slidesDesktop
          }
        },
        {
          breakpoint: 800,
          settings: {
            adaptiveHeight: true,
            arrows: arrowsTablet,
            autoplay: autoplayTablet,
            autoplaySpeed: 5000,
            centerMode: false,
            centerPadding: '0%',
            dots: dotsTablet,
            draggable: true,
            infinite: true,
            fade: false,
            slidesToShow: slidesTablet
          }
        },
        {
          breakpoint: 640,
          settings: {
            adaptiveHeight: true,
            arrows: arrowsMobile,
            autoplay: autoplayMobile,
            autoplaySpeed: 5000,
            centerMode: true,
            centerPadding: '10%',
            dots: dotsMobile,
            draggable: true,
            infinite: true,
            fade: false,
            slidesToShow: slidesMobile
          }
        }
      ]
    });

  }



// INFO GALLERY

  if (jQuery(".pane-fieldable-panels-pane").hasClass( "pane-bundle-cruk-info-gallery" )) {

    // Create variables for arrows settings.
    var arrowsInfoDesktop = (Drupal.settings.cruk_info_gallery.info_nav_arrows_setting_desktop == 'true');
    var arrowsInfoTablet = (Drupal.settings.cruk_info_gallery.info_nav_arrows_setting_tablet == 'true');
    var arrowsInfoMobile = (Drupal.settings.cruk_info_gallery.info_nav_arrows_setting_mobile == 'true');

    // Create variables for dots settings.
    var dotsInfoDesktop = (Drupal.settings.cruk_info_gallery.info_nav_dots_setting_desktop == 'true');
    var dotsInfoTablet = (Drupal.settings.cruk_info_gallery.info_nav_dots_setting_tablet == 'true');
    var dotsInfoMobile = (Drupal.settings.cruk_info_gallery.info_nav_dots_setting_mobile == 'true');

    // Add classes for nav button number settings.
    var $infoGalleryNav = jQuery('#info_gallery_nav');
    $infoGalleryNav.addClass('desktop_nav_btns_' + Drupal.settings.cruk_info_gallery.info_nav_btns_num_setting_desktop);
    $infoGalleryNav.addClass('tablet_nav_btns_' + Drupal.settings.cruk_info_gallery.info_nav_btns_num_setting_tablet);
    $infoGalleryNav.addClass('mobile_nav_btns_' + Drupal.settings.cruk_info_gallery.info_nav_btns_num_setting_mobile);


    // Slick plugin settings.
    var $infoGallery = jQuery('.pane-bundle-cruk-info-gallery .pane-content .field-items');
    $infoGallery.slick({
      arrows: arrowsInfoDesktop,
      centerMode: true,
      centerPadding: '0%',
      dots: dotsInfoDesktop,
      draggable: false,
      fade: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: arrowsInfoDesktop,
            centerMode: true,
            centerPadding: '0%',
            dots: dotsInfoDesktop,
            draggable: false,
            fade: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: arrowsInfoTablet,
            centerMode: true,
            centerPadding: '0%',
            dots: dotsInfoTablet,
            draggable: false,
            fade: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: arrowsInfoMobile,
            centerMode: true,
            centerPadding: '10%',
            dots: dotsInfoMobile,
            draggable: true,
            fade: false,
            slidesToShow: 1
          }
        }
      ]
    });


    // Add ascending ids to each slide.
    jQuery('.info_slide').each(function(index) {
      jQuery(this).attr('id', 'info_gallery_' + index);
    });
    // Add ascending ids to each button link.
    jQuery('.info_link').each(function(index) {
      jQuery(this).attr('id', 'info_gallery_' + index + '_link');
    });
    // Add relevant path to each button link.
    jQuery('.info_link a').each(function(index) {
      jQuery(this).attr('href', '#info_gallery_' + index);
    });

    // Make first button link active on page load.
    jQuery('.info_link').first().addClass('active');

    // Create function that removes and adds active class to button links.
    var updateActiveClasses = function () {
      // Get id of active slide.
      var slideId = jQuery('div.info_slide.slick-active').attr('id');
      // Remove active class from all button links.
      jQuery('li.info_link').removeClass("active");
      // Add active class to button link that has matching id of active slide.
      jQuery('#' + slideId + '_link').addClass("active");
    };

    // Tell slick to move to slide that has matching id of clicked button.
    jQuery('li.info_link').click(function (){
      var linkId = jQuery(this).attr('id');
      var slideTo = parseInt(linkId.replace("info_gallery_", ""));
      $infoGallery.slickGoTo(slideTo);

      updateActiveClasses();
    });

    // Add active class to relevant button link when nav dot or nav arrows are clicked.
    jQuery('ul.slick-dots li, .slick-next, .slick-prev').click(function (){
      updateActiveClasses();
    });

    // Create function that gets url hash and makes slide with corresponding id active.
    var goToCurrentSlide = function () {
      // Get url hash.
      var hash = window.location.hash;
      // Check if url contains a hash that matches a slide id.
      if (jQuery('div.info_slide').is(hash)) {
        // Tell slick to move to whatever slide matches the url hash.
        var linkId = jQuery('div.info_slide' + hash).attr('id');
        var slideTo = parseInt(linkId.replace("info_gallery_", ""));
        $infoGallery.slickGoTo(slideTo);

        updateActiveClasses();

        jQuery(window).load(function () {
          // Scroll to top of slide.
          jQuery('html, body').animate({
              scrollTop: jQuery("div.info_slide.slick-active").offset().top
          }, 1000);
        });
      }
    };
    goToCurrentSlide();

    // If url hash changes run goToCurrentSlide function.
    jQuery(window).on('hashchange', function(e){
      goToCurrentSlide();
    });

    // Set equal heights to navigation button links.
    if (jQuery(".info_link").hasClass( "info_link" )) {
      CRUK.Mia.setEqualHeights('ol.info_links', '.info_link');
    }
  }



// MEMBERS GALLERY

  if (jQuery(".pane-fieldable-panels-pane").hasClass( "pane-bundle-cruk-members-gallery" )) {

    var membersGallery = jQuery('.pane-bundle-cruk-members-gallery .pane-content .field-items');
    membersGallery.slick({
      arrows: false,
      centerMode: true,
      centerPadding: '0%',
      dots: false,
      draggable: false,
      fade: true,
      infinite: true,
      slidesToScroll: 1,
      slidesToShow: 1,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0%',
            dots: false,
            draggable: false,
            fade: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 800,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '0%',
            dots: false,
            draggable: false,
            fade: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 640,
          settings: {
            arrows: true,
            centerMode: true,
            centerPadding: '10%',
            dots: true,
            draggable: true,
            fade: false,
            slidesToShow: 1
          }
        }
      ]
    });


    // Add ascending ids to each slide.
    jQuery('.member_slide').each(function(index) {
      jQuery(this).attr('id', 'members_gallery_' + index);
    });
    // Make first link active on page load.
    jQuery('.member_link').first().addClass('active');
    // Add ascending ids to each link.
    jQuery('.member_link').each(function(index) {
      jQuery(this).attr('id', 'members_gallery_link_' + index);
    });
    // Add relevant path to each link.
    jQuery('.member_link a').each(function(index) {
      jQuery(this).attr('href', '#members_gallery_' + index);
    });


    // Tell slick to move to relevant slide when link is clicked.
    jQuery('.member_link').click(function (){
      var link_id = jQuery(this).attr('id');
      var slideTo = parseInt(link_id.replace("members_gallery_link_", ""));
      membersGallery.slickGoTo(slideTo);

      // Remove active class from all links.
      jQuery("li.member_link").removeClass("active");
      // Add active class to clicked link.
      jQuery(this).addClass("active");
    });

    // Wrap nav links in a div, 3 at a time.
    var rows = jQuery("ol.members_links > li");
    for(var i = 0; i < rows.length; i+=3) {
      rows.slice(i, i+3).wrapAll("<div class='links_row'></div>");
    }
  }



// GC PROCESS INFOGRAPHIC

  if (jQuery(".pane-fieldable-panels-pane").hasClass( "pane-bundle-cruk-gc-infographic" )) {

    // If pane is disabled, remove the href from the anchor tag and replace with a name.
    jQuery(".is-disabled .gc_process_content a").removeAttr("href");
    jQuery(".is-disabled .gc_process_content a").attr("name", "disabled_link");

  }




});

;/*})'"*/
;/*})'"*/
