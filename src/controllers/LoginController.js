const conectanobanco = require("../funcoes/database");

const usuarios = [ {"name":"NIU","login":"niu", "password":"GST!_#n!u*wks01", "key":"978546132", "keyTime":"798546123"},  {"name":"Grazi","login":"grazi", "password":"uniplac2022", "key":"978546132","keyTime":"798546123"}];

module.exports = {

    login(req, res) {
        var recive = req.body;
        var login = recive.login.replaceAll("'", "")
        login = recive.login.replaceAll("=", "")
        password = recive.password.replaceAll("=", "")
        
        usuarios.forEach(function (usuario) {
            if ((usuario.login === login) && (usuario.password === password)) {
                const key = Math.floor(Math.random() * 10000000); 
                usuario.key = key;
                usuario.keyTime = new Date().getTime();
                console.log(usuario.name + " - Usuario logado")
                return res.status(200).json({"entry":1, "name":usuario.name, "key":usuario.key})
            }
        })
        console.log("login error")
        return res.status(401).json({"entry":0})
    },

    session(req, res){
        const sendKey = req.body.key;
        var key = false;
            usuarios.forEach(function(usuario){
                const timeNow = new Date().getTime();
                if((usuario.key == sendKey) && (usuario.keyTime + 3600 < timeNow)){
                    console.log(usuario.name + " - sessão validada")
                    return res.status(200).json({"key" : true})
                }  
            })
            console.log("Sem sessão")
            return res.status(401).json({"key" : false})
    }

};
