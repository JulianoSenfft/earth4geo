<?php
include("header.php");
?>
    <script type="text/jsx" src="js/react/feeds.jsx"></script>
    <script type="text/jsx" src="js/react/map.jsx"></script>
    <script type="text/jsx" src="js/react/addPost.jsx"></script>
    <script type="text/jsx" src="js/renderMap.js"></script>
    <script type="text/javascript" src="js/addPostMap.js"></script>

    <script type="text/jsx">
        ReactDOM.render(
            <Map data={[]} />,
            document.getElementById('map')
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
                    <div id="map" class='full-height'></div>
                </div>
            </div>
            
            <div class="container">
                <div class="feed-map full-height">
                        <div class="panel-group" id="accordion">
                            <div class="panel panel-info feed">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1">
                                            <i class="fa fa-list-ul" aria-hidden="true"></i> Atividades recentes
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse1" class="panel-colapse-map panel-collapse collapse in">
                                    <div class="panel-body">
                                        <div id="feed"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel panel-info notificacoes">
                                <div class="panel-heading">
                                    <h4 class="panel-title">
                                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2">
                                            <i class="fa fa-bell" aria-hidden="true"></i> Notificações
                                        </a>
                                    </h4>
                                </div>
                                <div id="collapse2" class="panel-colapse-map panel-collapse collapse">
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
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3">
                                    <i class="fa fa-users" aria-hidden="true"></i> Grupos</a>
                                  </h4>
                                </div>
                                <div id="collapse3" class="panel-colapse-map panel-collapse collapse">
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

    </body>

<?php
include("footer.php");
?>