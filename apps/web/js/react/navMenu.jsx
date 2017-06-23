var Navmenu = React.createClass({
    
    getInitialState: function() {
        return {
            userinfo: []
        };
    },
    
    componentDidMount: function() {
        var userinfo = this.getUserInfo();
    },
    
    getUserInfo: function(){
        var user_id = checkCookie();
        var auth = checkCookie("earth4geo_crypt")
        
        $.ajax({
            url: request + '/server/wp-json/wp/v2/users/' + user_id,
            method: 'GET',
            beforeSend: function ( xhr ) {
                xhr.setRequestHeader( 'Authorization', 'Basic ' + auth );
            },
            error: function(error) {
                console.log(error)
            },
            success: function(result) {
                this.setState({userinfo: result});
            }.bind(this)
        });
    },

    render: function() {
        var styles = {
            backgroundImage: "url(" + this.state.userinfo.description + ")",
        };
        //conectado
        if(checkCookie()){
            return (
                <div>
                    <ul className="nav navbar-nav right-navbar-nav">
                        <li><a href="minha-conta.php"><span style={styles} className="small-user-photo"></span>Hello, {this.state.userinfo.name}</a></li>
                        <li><a href="index-user.php">Premium</a></li>
                        <li><a href="minha-conta.php">My account</a></li>
                        <li><a href="sair.php">Logout</a></li>
                    </ul>
                </div>
            )
        //desconectado
        }else{
            return (
                <div>
                    <ul className="nav navbar-nav right-navbar-nav">
                        <li><a href="index-user.php">Premium</a></li>
                        <li><a href="login.php">Login</a></li>
                        <li><a href="registrar.php">Register</a></li>
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
