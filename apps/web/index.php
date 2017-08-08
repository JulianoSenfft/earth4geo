<?php
include("header.php");
?>
    <script>
        jQuery(document).ready(function(){
            if(checkCookie() == 0){
                //window.location = "login.php"; 
            }else{
                window.location = "index-user.php";
            }
            jQuery('.full-slider').slick({
                dots: true,
                //autoplay: true,
                //autoplaySpeed: 7000,
                speed: 500,
                fade: true,
                arrows: false,
            });
        });
    </script>
    <div class="full-slider">
        <div class="slide-item full-height" style="background: url(http://hnserver.com.br/~earth4geo/server/wp-content/uploads/banner1.jpg) bottom left">
            <div class="content-banner-full flex-center">
                <div class="text-banner">
                    It's easy, it's fast, it's global!<br />
                    Just because we love geoscience and maps!
                </div>
            </div>
            
        </div>
        
        <div class="slide-item full-height" style="background: url(http://hnserver.com.br/~earth4geo/server/wp-content/uploads/banner2.jpg) center center">
        
            <div class="content-banner-full flex-center">
                <div class="text-banner">
                    The easiest way to access and interpret global geoscience data and analogs outcrops database
                </div>
            </div>
        
        </div>
        
        <div class="slide-item full-height" style="background: url(http://hnserver.com.br/~earth4geo/server/wp-content/uploads/banner3.jpg) center center">
        
            <div class="content-banner-full flex-center">
                <div class="text-banner">
                    The fastest way to share and improve your knowledge
                </div>
            </div>
            
        </div>
    </div>

<?php
include("footer.php");
?>