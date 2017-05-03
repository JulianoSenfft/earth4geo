var Addpost = React.createClass({
    
    getInitialState: function() {
        return {data: []};
    },

    render: function() {
        return (
            <div>
                <form>
                    <div className="form-group">
                        <label className="radio-inline">
                          <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"></input> Público
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"></input> Privado
                        </label>
                        <label className="radio-inline">
                          <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="option3"></input> Somente para mim
                        </label>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label for="exampleInputEmail1">Titulo</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Titulo"></input>
                    </div>
                    <div className="form-group">
                        <label for="exampleInputFile">Texto</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <hr />
                    <div className="form-group">
                        <div className="row">
                            <div className="col-md-12">
                                <div id="addPostFormMap"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <label for="exampleInputEmail1">Endereço</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite o nome da rua e escolha seu endereço abaixo"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <label for="exampleInputEmail1">Cidade</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite o nome da sua cidade"></input>
                            </div>
                            <div className="col-md-3">
                                <label for="exampleInputEmail1">Estado</label>
                                <select className="form-control">
                                  <option>RJ</option>
                                  <option>SP</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-9">
                                <label for="exampleInputEmail1">CEP</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite o cep"></input>
                            </div>
                            <div className="col-md-3">
                                <label for="exampleInputEmail1">País</label>
                                <select className="form-control">
                                  <option>BR</option>
                                  <option>AR</option>
                                </select>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <label for="exampleInputEmail1">Latitude</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite a latitude"></input>
                            </div>
                            <div className="col-md-6">
                                <label for="exampleInputEmail1">Longitude</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" placeholder="Digite a longitude"></input>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="form-group">
                        <label for="exampleInputFile">Foto</label>
                        <input type="file" id="exampleInputFile"></input>
                        <p className="help-block">As fotos devem ter, no máximo, 1mb de tamanho.</p>
                    </div>

                    <button type="submit" className="btn btn-default">Publicar</button>
                </form>
            </div>
        );
    }
});