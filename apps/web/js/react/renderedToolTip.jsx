var Tooltip = ReactBootstrap.Tooltip;

var OverlayTrigger = ReactBootstrap.OverlayTrigger;

var TooltipRenderized = React.createClass({
    
    getInitialState: function() {
        return {
            placement: [], 
            text: [], 
            icon: [], 
        };
    },
    
    render: function(){
        return(
            <OverlayTrigger placement={this.props.placement} overlay={<Tooltip id="tooltip">{this.props.text}</Tooltip>}>
                <i className={this.props.icon} aria-hidden="true"></i>
            </OverlayTrigger>
        );
    }
});
    
