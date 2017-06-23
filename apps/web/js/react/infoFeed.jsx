var InfoFeed = React.createClass({
    
    getInitialState: function() {
        return {
            data: [],
        };
    },
    
    viewMore: function(data) {
        PubSub.publish('carrega-ver-mais', data);
        PubSub.publish('carrega-ver-mais', data);
    },
    
    render: function(){
        var self = this;
        var data = this.props.data;
        return (
            <div className='single-post'>
                <div className='info-post-author'>
                    <div className='author-photo photo-default-feed'>
                        <img className='photo' src={data._embedded.author[0].description}></img>
                    </div>
                    <div className='author-name'>
                        {data._embedded.author[0].name} fez uma publicação
                    </div>
                </div>

                <div className='info-post-title-feed'>
                    <h4 key={'post-title-'+ data.id}> {data.meta_box.titulo} </h4>
                </div>

                {data.meta_box.conteudo ? (   
                    <div className='info-post-content'>
                        <p className={'post-content-'+ data.id} key={'post-content-'+ data.id}>
                            {data.meta_box.conteudo}
                            <span className='read-more'></span>
                        </p>
                    </div>
                ):( <span></span> )} 

                {data.meta_box.pais && data.meta_box.estado ? (
                    <div className='info-post'> 
                        <i className='fa fa-map-marker' />
                        <span className='pais'>
                            {data.meta_box.pais}
                        </span> 
                        <span className='estado'>
                            {data.meta_box.estado}
                        </span>
                    </div>
                ):( <span></span> )} 

                {data.meta_box.imagem ? (
                    <div className="featured-photo">
                        <img src={data.meta_box.imagem} /> 
                    </div>
                ):( <span></span> )}
                <div id="infoPost" className="vermais" onClick={function(){self.viewMore(data)}} data-toggle="modal" data-target="#view-post-modal">Ver Mais</div>
            </div>
        );
    },

});  
