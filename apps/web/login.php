<?php
include("header.php");
?>

    <script type="text/javascript" src="js/login.js"></script>

    <body>
        <div id="main">
            <h1>Login</h1>
            <div class="container">
                <div class="row main">
                    <div class="main-login main-center">
                        <form class="form-horizontal" method="post" action="#">

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

                            <div class="form-group ">
                                <button id="submeter" type="button" class="btn btn-primary btn-lg btn-block login-button">Login</button>
                            </div>
                            <div class="login-register">
                                <a href="registrar.php">Não possui uma conta? Registrar-se</a>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </body>

<?php
include("footer.php");
?>