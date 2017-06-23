var Findfriends = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
            tipopost: []
        };
    },
    
    componentDidMount: function() {
        
    },
    
    alteraTipoPost: function(tipo){
        this.setState({tipopost: tipo});
    },

    render: function() {
        
        var tipopost = null;
        
        if(this.state.tipopost == "peoples"){
            tipopost = <Peoples />;
        }
        
        return (
            <div>
                <div id="find-friends-modal" className="modal fade" role="dialog">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title">Details</h4>
                            </div>
                            <div className="modal-body">
                                
                                <div className="form-group">
                                    <fieldset>
                                        <label for="inlineRadio">Type</label><br />
                                        <label className="radio-inline">
                                            <input onClick={this.alteraTipoPost.bind(this, "peoples")} type="radio" name="type" id="peoples" value="peoples"></input> Peoples 
                                        </label>
                                        <label className="radio-inline">
                                            <input onClick={this.alteraTipoPost.bind(this, "groups")} type="radio" name="type" id="groups" value="groups"></input> Groups
                                        </label>
                                    </fieldset>
                                </div>
                                
                                {tipopost}
                                
                            </div>
                            <div className="modal-footer">
                                <button onClick={this.searchFriends} id="button-search-friends" type="submit" className="btn btn-default align-left">Search <span className="loader-button search-post"><i className="fa fa-spinner fa-pulse fa-3x fa-fw"></i></span></button>
                                
                                <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    
});

var Peoples = React.createClass({
    
    getInitialState: function() {
        return {
            data: []
        };
    },
    
    componentDidMount: function() {
    },
    
    render: function() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label for="endereco">Name or email</label>
                        <input type="text" className="form-control" id="search" placeholder=""></input>
                    </div>
                </form>
            </div>
        );
    }
});

ReactDOM.render(
    <Findfriends data={[]} />,
    document.getElementById('find-friends')
);