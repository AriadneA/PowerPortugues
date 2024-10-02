const mysql     = require('mysql2');

function executaSQL(query, res){
        const connection = mysql.createConnection({
    host        : 'localhost',
    port        :  3306,
    user        : 'root',
    password    : 'ariadne123.com',
    database    : 'powerportugues'
});

        connection.query(query, function(error, results){
                    if(error){
                        res.json(error);
                    }else{
                        res.json(results);
                    }
                connection.end();
                console.log('sucesso!');
        });
}
/*
connection.connect(function(err){
    if(err){
        return console.log(err);
    }
    console.log('conectou!');
})
*/

module.exports = executaSQL;