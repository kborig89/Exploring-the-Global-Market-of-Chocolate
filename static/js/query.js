// const sqlite3 = require("sqlite3");

// require.config({
//     paths: {
//         "sqlite3": "../../node_modules/sqlite3/sqlite3"
//     }
// });

define(['../node_modules/requirejs/require.js'], function(require){
    console.log( require('../../node_modules/sqlite3/sqlite3') );
});


// define(['../../node_modules/sqlite3/sqlite3'], function (sqliteThree) {
//     var db = new sqliteThree.Database('../../cacao_bean.sqlite')
//     var sql = `SELECT * FROM cacao_clean_withbean`
//     var data =[];
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("mark");
//             throw err;
//         }
//         rows.forEach((row) => {
//             data.push(row);
//         });
//     });
// });
// var sql3 = "sqlite3";
// require([sql3], (sqlite) => {
//     var db = new sqlite3.Database('../../cacao_bean.sqlite')
//     var sql = `SELECT * FROM cacao_clean_withbean`
//     var data =[];
//     db.all(sql, [], (err, rows) => {
//         if (err) {
//             console.log("mark");
//             throw err;
//         }
//         rows.forEach((row) => {
//             data.push(row);
//         });
//     });
// });

// localStorage.setItem("cacao", data);
// console.log(data);