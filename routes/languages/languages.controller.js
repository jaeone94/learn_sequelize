const path = require('path');
const { Language, Book } = require(path.join(process.env.PWD, '/models'));

exports.getLanguagesAll = (req, res, next) => {
    Language.findAll({
        order : [['name', 'ASC']],
        include : [{
            model : Book,
            attributes : ['name'],
            order : [['price', 'ASC']],
            limit : 1,
        }],
    }).then((response) => {
        res.json({
            message : 'success',
            data_list : response,
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    });
}

exports.getLanguagesOne = (req, res, next) => {
    Language.findOne({
        where : {
            id : req.params.id,
        },  
        include : [{
            model : Book,            
        }],
    }).then((response) => {
        response.Books.sort((a, b) => a.price - b.price);
        res.json({
            message : 'success',
            data : response,
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    });
}

exports.createLanguages = (req, res, next) => {
    Language.create(req.body, {
        fields : ['name', 'wiki_url']
    }).then((response) => {
        res.json({
            message : 'success',
            data : response
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    });
}

exports.updateLanguages = (req, res, next) => {
    Language.update({
       name : req.body.name,
       wiki_url : req.body.wiki_url, 
    }, {
        where : {
            id : req.body.id,
        }
    }).then((response) => {
        res.json({
            message : 'success',
            count : response[0] //영향을 받은 행 수
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    });
}

exports.deleteLanguages = (req, res, next) => {
    Language.destroy({
        where : {
            id : req.params.id,
        }
    }).then((response) => {
        res.json({
            message : 'success',
            count : response //영향을 받은 행 수
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    });
}