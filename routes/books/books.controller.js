const path = require('path');
const { Book } = require(path.join(process.env.PWD, '/models'));

exports.getBookAll = (req, res, next) => {
    Book.findAll({
        order : [['name', 'ASC']]
    }).then((response) => {
        res.json({
            message : 'success',
            data_list : response
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    })
}

exports.createBook = (req, res, next) => {
    Book.create(req.body
    , {
        fields : ['name', 'writter', 'price', 'language_id']
    }).then((response) => {
        res.json({
            message : 'success',
            data : response
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    })
}

exports.updateBook = (req, res, next) => {
    Book.update({
        name : req.body.name,
        writter : req.body.writter,
        price : req.body.price,
        language_id : req.body.language_id,
    }, {
        where : {
            id : req.body.id
        }
    }).then((response) => {
        res.json({
            message : 'success',
            count : response[0]
        });
    }).catch((error) => {
        console.log(error);
        const err = new Error(error);
        next(err);
    })
}

exports.deleteBook = (req, res, next) => {
    Book.destroy({
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