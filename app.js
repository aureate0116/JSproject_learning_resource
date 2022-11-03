let express = require('express');
let app = express();
let path = require('path')


//ejs-locals導入專案
let engine = require('ejs-locals');

//設定EJS引擎
app.engine('ejs', engine);
app.set('views', './views');
app.set('view engine', 'ejs');


//使用scss 
// let sassMiddleware = require('node-sass-middleware');

// app.use(sassMiddleware({
//     src: path.join(__dirname, 'public'),
//     dest: path.join(__dirname, 'public'),
//     indentedSyntax: false, // true = .sass and false = .scss
//     sourceMap: true
// }));

//要使用CSS在EJS檔案必須使用public資料夾
// app.use(express.static(__dirname + '/public'));
app.use(express.static(path.join(__dirname, '/public')));




app.get('/', function (req, res) { 
  //res.send('Hello World!');
  //使用index樣板，並可以帶入參數給樣板利用
  res.render('index',{title: '首頁',contents: '<h3>內容標題</h3>' ,'foods': ['apple', 'banana', 'mongo']});

  //res.render('index') //index.ejs
});

//增加頁面
app.get('/user', function (req, res) {
    res.render('user',{title: '使用者',contents: '<h3>內容標題</h3>'});
})


app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

////導入css資料夾裡的東西
app.use('/style', express.static('css'));


