<?php
include("header.php");
?>
    <script type="text/jsx" src="js/react/myAccount.jsx"></script>
    <script type="text/jsx" src="js/crop.js"></script>
    <script>
        jQuery(document).ready(function(){
            if(checkCookie() == 0){
                window.location = "login.php"; 
            }
        });      
    </script>

    <body>
        <div id="main">
            <h1>Minha Conta</h1>
            <div id="my-account"></div>
        </div>

    </body>

<?php
include("footer.php");
?>