var Map = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },
    
    componentDidMount: function() {
        $.ajax({
            url: 'http://macbook-pro-de-juliano.local/earth4geo/server/wp-json/wp/v2/publicacao',
            method: 'GET',
            error: function(xhr, status, error) {
              var err = eval("(" + xhr.responseText + ")");
              console.log(err.Message);
            },
            success: function(result) {
                renderMap(result);
                this.setState({data: result});
            }.bind(this)
        });
    },
    
    render: function() {
        return (
            <div>
                <div id="map"></div>
            </div>
        )
    }
});