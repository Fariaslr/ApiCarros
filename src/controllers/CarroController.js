const CarroService = require('../services/CarroServices');

module.exports = {
    buscarTodos: async (req, res) => {
        let json = {error:'', result:[]};

        let carros = await CarroService.buscarTodos();

        for (let i in carros){
            json.result.push({
                codigo: carros[i].codigo,
                descricao: carros[i].modelo,
                placa: carros[i].placa
            });
        }
        res.json(json);
    },

    buscarUm: async (req, res) =>{
        let json = {error: '',result:{}};

        let codigo = req.params.codigo;
        let carros = await CarroService.buscarUm(codigo);

        if(carros){
            json.result = carros;
        }

        res.json(json);
    },

    inserir: async (req, res) =>{
        let json = {error: '',result:{}};

        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(modelo && placa){
            let carroCodigo = await CarroService.inserir(modelo,placa);
            json.result = {
                codigo: carroCodigo,
                modelo,
                placa
            };
        } else{
            json.error = 'Campos não enviados';
        }

        res.json(json);
    },

    alterar: async (req, res) =>{
        let json = {error: '',result:{}};

        let codigo = req.params.codigo;
        let modelo = req.body.modelo;
        let placa = req.body.placa;

        if(codigo && modelo && placa){
            await CarroService.alterar(codigo,modelo,placa);
            json.result = {
                codigo,
                modelo,
                placa
            };
        } else{
            json.error = 'Campos não alterados';
        }

        res.json(json);
    },

    excluir : async(req,res) => {
        let json = {error: '',results:{}}      
        
        await CarroService.excluir(req.params.codigo);

        res.json(json);
    }
}