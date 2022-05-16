const conectanobanco = require("../funcoes/database");

module.exports = {

async buscaMultas(req, res){

    var RETORNO = await conectanobanco.query(`select  
    right(pessoa.cod_pessoa_aux,6) as 'ra',
    pessoa.nome_pessoa,
    convert(varchar,data_multa,103) as 'data_multa',
    valor_multa,
    num_titulo,
    convert(varchar,data_emprestimo,103) as 'data_emprestimo',
    flag_transporte 
from exporta_multa 
join pessoa on pessoa.cod_pessoa = exporta_multa.cod_pessoa
where flag_transporte = 'T' order by pessoa.nome_pessoa;`, 
    {type: conectanobanco.QueryTypes.SELECT});

    return res.status(200).json({RETORNO})
},

async alterarEstatus(req, res){
    var DATA = req.body;
    console.log(DATA.COD);

    var ALTERADO = await conectanobanco.query(`update exporta_multa 
                                                set flag_transporte = 'W'
                                                where num_titulo = '${DATA.COD}';`, 
                                                {type: conectanobanco.QueryTypes.UPDATE});
    return res.status(200).json({ALTERADO})
}

};
