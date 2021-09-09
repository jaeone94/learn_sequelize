const express = require('express');
const app = express();
const routes = require('./routes');


app.set('port', 3000);
app.use(express.json());
app.use('/', routes);

const { sequelize } = require('./models');
sequelize.sync({alter : true})
.then(()=> {
    console.log('database connected');
}).catch((err)=>{
    console.log(err);
});

//404 미들웨어
app.use((req, res, next) => {
    res.status(404).send(`${req.method} ${req.url} API not found !`);
});

//에러처리 미들웨어
app.use((err, req, res, next) => {
    res.status(500).json({
        message : err.message
    })
});

app.listen(app.get('port'), () => {
    console.log('Server is running on ', app.get('port'));
})


