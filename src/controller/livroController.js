const express = require('express');
const router = express.Router();
const axios = require('axios');


const livros = [];

router.get('/livros', async (req,res) => {
    var retorno = await axios.get('http://biblioteca.supero.com.br/api/Livros');

    livros.push(retorno.data);
    return res.json(livros);
});

router.get('/search-supero', async (req,res) => {
    var buscar = req.query.Busca;
    var anoIni = req.query.AnoInicial;
    var anoFi = req.query.AnoFinal;
    var sort = req.query.Sort;
    var maxPage = req.query.MaxResultCount;
    var skp = req.query.SkipCount;
    
    
    var retorno = await axios.get('http://biblioteca.supero.com.br/api/Livros', {
        params: {
            Busca: buscar ? buscar : '',
            AnoInicial: anoIni ? anoIni : null,
            AnoFinal: anoFi ? anoFi : null,
            Sort: sort ? sort : '',
            MaxResultCount: maxPage ? maxPage : null,
            SkipCount: skp ? skp : null
        }
    });
    //console.log(retorno);
    return res.json(retorno.data);
});



router.get('/search', async (req,res) => {

    const toSearch = req.query.buscar;
    var retorno = await axios.get('http://biblioteca.supero.com.br/api/Livros');
    const { items }  = retorno.data;
    //items.map( item => console.log(item.titulo));

    var filtersResult = items.filter(function(post, index) {
        //console.log(post.ano);
        if(post.titulo.toLowerCase().indexOf(toSearch.toLowerCase()) != -1 
            || post.autor.indexOf(toSearch) != -1
            || post.isbn.indexOf(toSearch) != -1 || post.ano == toSearch)
            return true;
    });
    var countRegistrsFind = filtersResult.length;
    console.log(countRegistrsFind);

    return res.json(filtersResult);
});


router.get('/livros/:id', async (req,res) => {
    var  id  = req.params.id;
    var re = await axios.get(`http://biblioteca.supero.com.br/api/Livros/${id}`);

    return res.json(re.data);
});

router.post('/livros', async (req,res) => {

    try {
        const livro = await axios.post('http://biblioteca.supero.com.br/api/Livros', {
        titulo: req.body.titulo,
        isbn: req.body.isbn,
        autor: req.body.autor,
        editora: req.body.editora ,
        ano: req.body.ano,
        idioma: req.body.idioma,
        peso: req.body.peso,
        comprimento: req.body.comprimento,
        largura: req.body.largura,
        altura: req.body.altura
    });

    return res.send( livro)

    } catch (error) {
        return res.status(400).send(error);
    }
    
});

router.put('/livros/:id', async (req, res) => {
    const id = req.params.id;
    const {titulo, isbn,autor,editora,ano,idioma,peso,comprimento,largura,altura } = req.body;
    try {
        const resposta = await axios.put(`http://biblioteca.supero.com.br/api/Livros/${id}`, {
        titulo: titulo,
        isbn: isbn,
        autor: autor,
        editora: editora,
        ano: ano,
        idioma: idioma,
        peso: peso,
        comprimento: comprimento,
        largura: largura,
        altura: altura
    });
    
        return res.json(resposta.data);
    } catch (error) {
        return res.status(500).send(error);
    }
    
});

router.delete('/livros/:id', async (req, res) => {
    const  id  = req.params.id;
    
    try {
       const data =  await axios.delete(`http://biblioteca.supero.com.br/api/Livros/${id}`);
       return res.status(200).ok();
    } catch (error) {
        
        return res.send(error);
    }


})
module.exports = app => app.use('/api', router);