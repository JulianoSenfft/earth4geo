<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Earth 4 Geo</title>
        <script type="text/javascript" src="js/jquery/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <link rel="stylesheet" href="css/style.css" crossorigin="anonymous">
        <script type="text/javascript" src="css/scripts.js"></script>
        <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css" />
        
        
        <!-- BOOTSTRAP -->
        <!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> 
        
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous"> 
        
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>-->
        
        
        <!-- REACT JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-bootstrap/0.31.0/react-bootstrap.min.js"></script>
         
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDaw1tH5Rps2SrSbrRxu1EJxn38lO4ZB94"
  type="text/javascript"></script>
        
        <!-- PUBSUB -->
        <script src="https://cdn.jsdelivr.net/pubsubjs/1.4.2/pubsub.min.js"></script>
        
        <?php
        $requests = "http://" . $_SERVER['SERVER_NAME'];
        if($_SERVER['SERVER_NAME'] == "macbook-pro-de-juliano.local"){
            $requests = "http://" . $_SERVER['SERVER_NAME'] . "/earth4geo";
        }if($_SERVER['SERVER_NAME'] == "hnserver.com.br"){
            $requests = "http://" . $_SERVER['SERVER_NAME'] . "/~earth4geo";
        }
        ?>
        
        <!-- BOOTSTRAP -->
        <link rel="stylesheet" href="<?php echo $requests; ?>/apps/web/css/bootstrap-3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="<?php echo $requests; ?>/apps/web/css/bootstrap-3.3.7/css/bootstrap-theme.min.css"> 
        <script src="<?php echo $requests; ?>/apps/web/css/bootstrap-3.3.7/js/bootstrap.min.js"></script>
        
        <!-- SLICK SLIDE -->
        <script type="text/javascript" src="<?php echo $requests; ?>/apps/web/js/slickslide/slick.min.js"></script>
        <link rel="stylesheet" type="text/css" href="<?php echo $requests; ?>/apps/web/js/slickslide/slick.css"/>
        <link rel="stylesheet" type="text/css" href="<?php echo $requests; ?>/apps/web/js/slickslide/slick-theme.css"/>
        
        <!-- LOCAL FILES -->
        <script src="<?php echo $requests; ?>/apps/web/js/storage.js"></script>
        <script src="<?php echo $requests; ?>/apps/web/js/message.js"></script>
        
        <script>
            var request = "<?php echo $requests; ?>";
            var current_user = checkCookie();
        </script>
        
        <script src="<?php echo $requests; ?>/apps/web/js/react/navMenu.jsx" type="text/jsx"></script>
        <script src="<?php echo $requests; ?>/apps/web/js/markercluster/src/markerclusterer.js"></script>
        <script src="<?php echo $requests; ?>/apps/web/js/notificacao.js"></script>
        
        <script>
        jQuery(document).ready(function(){
            jQuery('[data-toggle="tooltip"]').tooltip();  
        });
        </script>
        
    </head>
    <header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index.php">
                        <img src="http://hnserver.com.br/~earth4geo/logo_earth_4_geo.png" />
                    </a>
                </div>
                <div id="navmenu"></div>
            </div>
        </nav>
    </header>
