import React, { useEffect } from 'react';

const Animation = () => {
    useEffect(()=>{
        $(window).scroll(function(){
            if($(window).scrollTop()>=200){
              $('.car-top').addClass("show");
              $('.car-top').addClass("car-down")
            }
            else {
              $('.car-top').removeClass("show");
              setTimeout(function(){
                $('.car-top').removeClass('car-down')
              },300)
            }
          });
          $(document).on("click", ".car-top", function() {
            $('html,body').animate({scrollTop:0},800);
            $(this).addClass("car-run");
            setTimeout(function(){
              $('.car-top').removeClass('car-run')
            },1000);  
            return!1 
          });
          
          $(document).on("click", ".goSection", function() {
            $('html,body').animate({
                scrollTop: $(".secHomeAbout").offset().top},
                800);
          });
          
          $(document).on("click", ".goProduct", function() {
            $('html,body').animate({
                scrollTop: $(".secHomeProduct").offset().top},
                800);
          });
          
          $(window).scroll(function() { 
                $('.counting').each(function() {
                    var $this = $(this),
                    countTo = $this.attr('data-count');
                    $({ countNum: $this.text()}).animate({
                        countNum: countTo
                    },
                    {
                        duration: 5000,
                        easing:'linear',
                        step: function() {
                          $this.text(Math.floor(this.countNum));
                        },
                        complete: function() {
                          $this.text(this.countNum);
                        }
                    });  
                });
          });
          
          $(window).scroll(function() {
            if ($(this).scrollTop() > 1){  
              $('header').addClass("sticky");
            }
            else {
              $('header').removeClass("sticky");
            }
          });
                    
          $(document).ready(function () {
            AOS.init();
          
            lightGallery(document.getElementById('lightgallery'),{                
              selector: '.item'
            });
            lightGallery(document.getElementById('video-gallery'));
            lightGallery(document.getElementById('html5-videos'));
           
            
            $('.banner-carousel').owlCarousel({
              loop:true,
              margin:0,
              dots:false,
              nav:true,
              mouseDrag:false,
              autoplay:true,
              animateOut: 'fadeOut',
              navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
              items:1,
              responsive : {
                0 : {
                  animateOut: '',
                },
                380 : {
                  animateOut: '',
                },
                575 : {
                  animateOut: '',
                },
              }
            });
          
            $('.count-carousel').owlCarousel({
              loop:true,
              margin:0,
              dots:false,
              nav:false,
              mouseDrag:false,
              autoplay:false,
              animateOut: 'fadeOut',
              items:4,
              responsive : {
                0 : {
                  items:1,
                  autoplay: true
                },
                380 : {
                  items:1,
                  autoplay: true
                },
                575 : {
                  items:2,
                  autoplay: true
                },
                767 : {
                  items:3,
                  autoplay: true
                },
                991 : {
                  items:4,
                }
              }
            });
          
            $('.tab-carousel').owlCarousel({
              loop:false,
              margin:0,
              dots:false,
              nav:false,
              mouseDrag:false,
              autoplay:false,
              items:4,
              responsive : {      
                0 : {
                  items:1,
                  nav:true,
                  loop:true,
                  center:true
                },
                380 : {
                  items:1,
                  nav:true,
                  loop:true,
                  center:true
                },
                575 : {
                  items:2,
                  nav:true,
                  loop:true,
                  center:true
                },
                768 : {
                  items:4
                },
                991 : {
                  items:4
                }
              }
            });
          
            $('.relatedProduc-carousel').owlCarousel({
              loop:false,
              margin:40,
              dots:false,
              nav:false,
              mouseDrag:false,
              autoplay:false,
              items:3,
              responsive : {      
                0 : {
                  items:1,
                  autoplay:true,
                  loop: true
                },
                380 : {
                  items:1,
                  autoplay:true,
                  loop: true
                },
                575 : {
                  items:2,
                  autoplay:true,
                  loop: true
                },
                767 : {
                  items:2,
                  autoplay:true,
                  loop: true
                },
                768 : {
                  items:3
                }
              }
            });


            $('.certificate-carousel').owlCarousel({
              loop:true,
              margin:0,
              dots:false,
              nav:false,
              mouseDrag:false,
              autoplay:false,
              items:4,
              responsive : {
                0 : {
                  items:1,
                  autoplay: true
                },
                380 : {
                  items:1,
                  autoplay: true
                },
                575 : {
                  items:2,
                  autoplay: true
                },
                767 : {
                  items:3,
                  autoplay: true
                },
                991 : {
                  items:3,
                }
              }
            });
          
            $(".navbar-toggler").click(function(){
              $(this).parents('header').toggleClass('active');
              $('.overlayMenu').toggleClass('active');
              $(this).toggleClass('active')
              $('body').toggleClass('menuActive')
            });
          
            $(".overlayProductItem a").click(function(){
              $('.overlayProductMenu').toggleClass('active');
              $('.navbar-toggler').toggleClass('active-mega');
              $('.megamenuBtn').toggleClass('active');
            });
          
            $(".megamenuBtn").click(function(){
              $(this).removeClass('active')
              $('.overlayProductMenu').toggleClass('active');
              $('.navbar-toggler').removeClass('active-mega');
            });
          
          
          });
          
          $(document).on("click", "button.close", function(e){
            $(this).parents('.fullModal').find("iframe").attr("src", $(this).parents('.fullModal').find("iframe").attr("src"));
          });

          $(document).on("click", ".btn-load", function(e){
            $(this).parent('.text-center').css("display", "none");
            $(this).parents(".loadmore").next(".loadmore").show();
          });
          
          
          $(window).on('load', function() { // makes sure the whole site is loaded 
            $('.blobs').fadeOut(); // will first fade out the loading animation 
            $('.blob').delay(500).fadeOut('slow'); // will fade out the white DIV that covers the website. 
          });
          
        lax.init()
        lax.addDriver('scrollY', function () {
          return window.scrollY
        })
        lax.addElements('.homeCeramic1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, 500],
            ]
          }
        })  
        lax.addElements('.homeCeramic2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, -400],
            ]
          }
        }) 
        lax.addElements('.homeCeramic3', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, -600],
            ]
          }
        })
        lax.addElements('.homeCeramic4', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [200, 0, -600],
            ]
          }
        })
        lax.addElements('.homeCeramic5', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, 400],
            ]
          }
        })
      
        lax.addElements('.productLax', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-50, 0, 100],
            ]
          }
        })
      
      
        lax.addElements('.galleryLeftImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [250, 20, 350],
            ]
          }
        })
        lax.addElements('.galleryRightImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [250, 0, 350],
            ]
          }
        })
      
        lax.addElements('.aboutBannerLeftImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [100, 0, -400],
            ]
          }
        })
        lax.addElements('.aboutBannerRightImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [200, 0, 300],
            ]
          }
        })
        lax.addElements('.whyRightImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 100, 250],
            ]
          }
        })
      
        
        lax.addElements('.aboutRightImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 0, 400],
            ]
          }
        })  
      
        lax.addElements('.missionLeftImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-200, 20, 0],
            ]
          }
        })  
      
        lax.addElements('.contactBottomLeft', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-150, 0, -50],
            ]
          }
        })  
      
        lax.addElements('.contactBottomRight', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-200, 0, -50],
            ]
          }
        })   
      
        lax.addElements('.ball-big', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [200, 0, -400],
            ]
          }
        })   
      
        lax.addElements('.ball-small', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, 300],
            ]
          }
        })   
      
        lax.addElements('.productVideoRightImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 0, 200],
            ]
          }
        })  
      
        lax.addElements('.faqLeftImg', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, 300],
            ]
          }
        })
      
       
      
        lax.addElements('.faqBottomImg', {
          scrollY: {
            translateX: [
              ["elInY", "elCenterY", "elOutY"],
              [0, '100', '500'],
            ]
          }
        })
      
        lax.addElements('.productGalleryRight', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, 200],
            ]
          }
        })
      
       
        lax.addElements('.productImg1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 0, -200],
            ]
          }
        })
        lax.addElements('.productImg2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 0, 0],
            ]
          }
        })
        
        lax.addElements('.aboutHeading-ball1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [500, 600, 0],
            ]
          }
        })
        lax.addElements('.aboutHeading-ball2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, -650, 600],
            ]
          }
        })
      
        lax.addElements('.bottomContact-ball1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 50, 200],
            ]
          }
        })
        lax.addElements('.bottomContact-ball2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [300, 80, -200],
            ]
          }
        })
        lax.addElements('.bottomContact-ball3', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 150, 300],
            ]
          }
        })
      
        
        lax.addElements('.contactFormImg1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [700, 80, -200],
            ]
          }
        })
        lax.addElements('.contactFormImg2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [100, 100, 620],
            ]
          }
        })
      
        
        lax.addElements('.ceramicProductBall1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [600, 100, 0],
            ]
          }
        })
        lax.addElements('.ceramicProductBall2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-250, 100, 300],
            ]
          }
        })
        lax.addElements('.ceramicProductBall3', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [200, 80, 400],
            ]
          }
        })
      
        lax.addElements('.paintBenefitImg1', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [-100, 80, 0],
            ]
          }
        })
        lax.addElements('.paintBenefitImg2', {
          scrollY: {
            translateY: [
              ["elInY", "elCenterY", "elOutY"],
              [0, 80, -300],
            ]
          }
        })
    }, []);
    return (
        <div>
    <div className="lax whyRightImg" hidden><img src="img/whyText.svg" className="img-fluid" /></div>

        </div>
    );
};

export default Animation;