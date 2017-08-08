<?php
include("header.php");
?>
    <script type="text/javascript" src="js/login.js"></script>
    <script>
        jQuery(document).ready(function(){
            if(checkCookie() > 0){
                window.location = "index-user.php"; 
            }
        });      
    </script>

    <body>
        <div id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 align-center box-form">
                        <h1>Login</h1>
                        <div class="main-login main-center">
                            <form class="form-horizontal col-md-12" method="post" action="#">
                                <div class="form-group">
                                    <label for="email" class="cols-sm-2 control-label">Seu E-mail</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="email" id="email"  placeholder="Digite seu email"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="password" class="cols-sm-2 control-label">Senha</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" class="form-control" name="password" id="password"  placeholder="Digite sua senha"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="login-register">
                                        <a href="registrar.php">Não possui uma conta? Registre-se</a>
                                     </div>
                                    <button id="submeter" type="button" class="btn btn-primary btn-block login-button">Login</button>
                                </div>
                                <div class="form-group">
                                    <div class="login-message"></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </body>

<?php
include("footer.php");
?>