var Navmenu = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },

    render: function() {
        
        //conectado
        if(checkCookie()){
            return (
                <div>
                    <ul className="nav navbar-nav right-navbar-nav">
                        <li><a href="index-user.php">Seja Premium</a></li>
                        <li><a href="minha-conta.php">Minha Conta</a></li>
                        <li><a href="sair.php">Sair</a></li>
                    </ul>
                </div>
            )
        //desconectado
        }else{
            return (
                <div>
                    <ul className="nav navbar-nav right-navbar-nav">
                        <li><a href="index-user.php">Seja Premium</a></li>
                        <li><a href="login.php">Login</a></li>
                        <li><a href="registrar.php">Registrar</a></li>
                        <li><a href="sair.php">Sair</a></li>
                    </ul>
                </div>
            )
        }
    }
});

ReactDOM.render(
    <Navmenu />,
    document.getElementById('navmenu')
);
