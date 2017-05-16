<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Earth 4 Geo</title>
        <script type="text/javascript" src="js/jquery/jquery-3.2.1.min.js"></script>
        <script type="text/javascript" src="js/main.js"></script>
        <link rel="stylesheet" href="css/style.css">
        <script type="text/javascript" src="css/scripts.js"></script>
        <link rel="stylesheet" href="css/font-awesome/css/font-awesome.min.css" />
        
        <!-- Latest compiled and minified CSS -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

        <!-- Optional theme -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

        <!-- Latest compiled and minified JavaScript -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
        
        <!-- REACT JS -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.1.0/react-dom.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>
        <script src="https://unpkg.com/babel-standalone@6.24.0/babel.min.js"></script>
        <script src="https://cdn.jsdelivr.net/lodash/4.17.4/lodash.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/JSXTransformer.js"></script>
         
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDaw1tH5Rps2SrSbrRxu1EJxn38lO4ZB94"
  type="text/javascript"></script>
        
        <?php
        $domain = $_SERVER['SERVER_NAME'];
        if($domain == "macbook-pro-de-juliano.local"){
            $requests = "http://" . $domain . "/earth4geo";
        }
        ?>
        <script>
        var request = "<?php echo $requests; ?>";
        alert(request)
        </script>
        
    </head>
    <header>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <div class="navbar-header">
                    <a class="navbar-brand" href="index-user.php">
                        <img src="http://hnserver.com.br/~earth4geo/logo_earth_4_geo.png" />
                    </a>
                </div>
                <ul class="nav navbar-nav">
                </ul>
                <ul class="nav navbar-nav right-navbar-nav">
                    <li><a href="index-user.php">Seja Premium</a></li>
                    <li><a href="minha-conta.php">Minha Conta</a></li>
                    <li><a href="sair.php">Sair</a></li>
                </ul>
            </div>
        </nav>
    </header>
