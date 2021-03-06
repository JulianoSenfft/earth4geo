<?php
include("header.php");
?>

    <script type="text/javascript" src="js/registrar.js"></script>

    <body>
        <div id="main">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 align-center box-form">
                        <h1>Registrar</h1>
                        <div class="main-login main-center">
                            <form class="form-horizontal col-md-12" method="post" action="#">

                                <div class="form-group">
                                    <label for="name" class="cols-sm-2 control-label">Seu nome</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-user fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="name" id="name"  placeholder="Digite seu nome"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label for="email" class="cols-sm-2 control-label">Seu E-mail</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-envelope fa" aria-hidden="true"></i></span>
                                            <input type="text" class="form-control" name="email" id="email"  placeholder="Digite seu e-mail"/>
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
                                    <label for="confirm" class="cols-sm-2 control-label">Confirmar Senha</label>
                                    <div class="cols-sm-10">
                                        <div class="input-group">
                                            <span class="input-group-addon"><i class="fa fa-lock fa-lg" aria-hidden="true"></i></span>
                                            <input type="password" class="form-control" name="confirm" id="confirm"  placeholder="Confirmar sua senha"/>
                                        </div>
                                    </div>
                                </div>

                                <div class="form-group">
                                    <label class="checkbox-inline">
                                        <input type="checkbox" value="termos-de-uso"> Li e aceito os <a href="termos-de-uso.php">Termos de Uso</a> e <a href="privacidade.php"> Politica de Privacidade</a>.
                                    </label>
                                </div>

                                <div class="form-group">
                                    <div class="login-register">
                                        <a href="login.php">Já possui uma conta? Fazer login</a>
                                     </div>
                                    <button id="submeter" type="button" class="btn btn-primary btn-block register-button">Registrar</button>
                                </div>
                                <div class="form-group">
                                    <div class="register-message"></div>
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