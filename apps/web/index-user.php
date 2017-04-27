<?php
include("header.php");
?>
    <script type="text/jsx" src="js/react/feeds.jsx"></script>
    <script type="text/jsx" src="js/react/map.jsx"></script>
    <script type="text/jsx" src="js/renderMap.js"></script>

    <script type="text/jsx">
        ReactDOM.render(
            <Map data={[]} />,
            document.getElementById('feed1')
        );
        ReactDOM.render(
            <Feed data={[]} />,
            document.getElementById('feed')
        );
    </script>

    <body class="home has-full-map">
        <div id="main">
            
            <div class="full-width">
                <div class="full-col col-md-12">
                    <div id="feed1"></div>
                </div>
            </div>
            
            <div class="container">
                <div class="feed-map">
                    <div class="title-center">
                        <h3>Atividades recentes</h3>
                    </div>
                    <div id="feed"></div>
                </div>
                <div id="container-main" class="row">
                    <div class="col-md-8">
                        <h3>Publicar</h3>
                        
                        <form>
                            <div class="form-group">
                                <label class="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"> Público
                                </label>
                                <label class="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"> Privado
                                </label>
                                <label class="radio-inline">
                                  <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"> Somente para mim
                                </label>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="exampleInputEmail1">Titulo</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Titulo">
                            </div>
                            <div class="form-group">
                                <label for="exampleInputFile">Texto</label>
                                <textarea class="form-control" rows="3"></textarea>
                            </div>
                            <hr />
                            <div class="form-group">
                                <div class="row">
                                    <div class="col-md-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d117613.55265909058!2d-43.037752849414055!3d-22.89774453725184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1493321399762" width="100%" height="150" frameborder="0" style="border:0" allowfullscreen></iframe>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-12">
                                        <label for="exampleInputEmail1">Endereço</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite o nome da rua e escolha seu endereço abaixo">
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9">
                                        <label for="exampleInputEmail1">Cidade</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite o nome da sua cidade">
                                    </div>
                                    <div class="col-md-3">
                                        <label for="exampleInputEmail1">Estado</label>
                                        <select class="form-control">
                                          <option>RJ</option>
                                          <option>SP</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-9">
                                        <label for="exampleInputEmail1">CEP</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite o cep">
                                    </div>
                                    <div class="col-md-3">
                                        <label for="exampleInputEmail1">País</label>
                                        <select class="form-control">
                                          <option>BR</option>
                                          <option>AR</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <label for="exampleInputEmail1">Latitude</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite a latitude">
                                    </div>
                                    <div class="col-md-6">
                                        <label for="exampleInputEmail1">Longitude</label>
                                        <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Digite a longitude">
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div class="form-group">
                                <label for="exampleInputFile">Foto</label>
                                <input type="file" id="exampleInputFile">
                                <p class="help-block">As fotos devem ter, no máximo, 1mb de tamanho.</p>
                            </div>

                            <button type="submit" class="btn btn-default">Publicar</button>
                        </form>
                    </div>

                    <div class="col-md-4">
                        <div class="panel-group" id="accordion">
                            <div class="panel panel-info notificacoes">
                                <div class="panel-heading">
                                  <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                    <i class="fa fa-bell" aria-hidden="true"></i> Notificações</a>
                                  </h4>
                                </div>
                                <div id="collapse1" class="panel-collapse collapse in">
                                    <div class="panel-body">
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                            </div>
                                            <div class='author-name'>
                                                Juliano Senfft fez uma publicação
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                            </div>
                                            <div class='author-name'>
                                                Juliano Senfft fez uma publicação
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                            </div>
                                            <div class='author-name'>
                                                Juliano Senfft fez uma publicação
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                            </div>
                                            <div class='author-name'>
                                                Juliano Senfft curtiu sua publicação
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://pbs.twimg.com/profile_images/643969868396670976/xA4pTpYb_400x400.png'></img>
                                            </div>
                                            <div class='author-name'>
                                                Juliano Senfft curtiu sua publicação
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-info groups">
                                <div class="panel-heading">
                                  <h4 class="panel-title">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                    <i class="fa fa-users" aria-hidden="true"></i> Grupos</a>
                                  </h4>
                                </div>
                                <div id="collapse2" class="panel-collapse collapse">
                                    <div class="panel-body">

                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://khms1.googleapis.com/kh?v=722&hl=en-US&x=4159&y=3108&z=13'></img>
                                            </div>
                                            <div class='author-name'>
                                                Grupo UFF 2017.2
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='http://tile23.gigapan.org/gigapans0/23590/tiles//r02/r021.jpg'></img>
                                            </div>
                                            <div class='author-name'>
                                                Grupo creartcode
                                            </div>
                                        </div>
                                        <div class='info-post-author'>
                                            <div class='author-photo photo-default-feed'>
                                                <img class='photo' src='https://khms0.googleapis.com/kh?v=722&hl=en&&x=6372&y=3132&z=13'></img>
                                            </div>
                                            <div class='author-name'>
                                                Grupo UFRJ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </body>

<?php
include("footer.php");
?>