<?php
include("header.php");
?>
    <script type="text/jsx" src="js/react/feeds.jsx"></script>
    <script>
        jQuery(document).ready(function(){
            console.log(checkCookie())
            if(checkCookie() == 0){
                window.location = "login.php"; 
            }else{
                window.location = "index-user.php";
            }
        });      
    </script>


<?php
include("footer.php");
?>