jQuery(document).ready(function(){
    jQuery("#submeter").click(function() {
        var email = jQuery("#email").val();
        var password = jQuery("#password").val();
        
        console.log(email);
        console.log(password);
    }); 
});


/*render: function() {
        return (
            <div>
                {this.state.data.map(function(data, i) {
                 
                    let feed;
                 
                    var titulo = data.meta_box.titulo
                    var latitude = data.meta_box.latitude
                    var longitude = data.meta_box.longitude
                    var pais = data.meta_box.pais
                    var estado = data.meta_box.estado
                    var conteudo = data.meta_box.conteudo
                    var imagem = data.meta_box.imagem
                    return (
                        <div className='full-post'>
                            <h2 key={'post-title-'+ i}> {titulo} </h2>
                            <div className='info-post'> 
                                <span className='pais'>
                                    <i className='fa fa-map-marker' />
                                    {pais}
                                </span>
                                <span className='estado'>
                                    {estado}
                                </span>
                            </div>
                            <p key={'post-content-'+ i}> {conteudo} </p>
                            <img src={imagem} />
                        </div>
                    )
                })}
            </div>
        );
    }*/