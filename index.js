const express = require("express");
const app     = express();
app.set("view engine" , "ejs");
app.use(express.static(__dirname + "/dosyalar"));


var ucTaneKitap = [
  {kitapismi : "Sefiller Hugo 1" , fiyat: 20 , index : 0},
  {kitapismi : "Suç ve Ceza" , fiyat: 50, index : 1},
  {kitapismi : "Tehlikeli Oyunlar" , fiyat: 30, index: 2}
];


app.get("/" , function(req , res){
    res.render("anasayfa" , { kitaplar : ucTaneKitap } );
});

app.get("/kitap/:isim/:index", function(req, res){
    var indexDegeri = req.params.index;

    var kitapIsmi = ucTaneKitap[indexDegeri].kitapismi;
    var kitapFiyati = ucTaneKitap[indexDegeri].fiyat;

    res.render("kitap" , { isim : kitapIsmi , fiyat : kitapFiyati }  );

});


let port = process.env.PORT;
if(port == "" || port == null){
  port = 8000;
}
console.log(`Your port is ${port}`);
app.listen(port);
