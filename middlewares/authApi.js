const jwt = require('jsonwebtoken');
const moment = require('moment')
require('dotenv').config()
jwtSecret = process.env.JWT_PASS;
const authApi ={
    auth: async (req,res,next) =>{
    const authToken = req.headers['authorization'];
    if(authToken != undefined){
        const bearer = authToken.split(' ');
      
        const token = bearer[1];
        try {
            const usuario = await jwt.verify(token,jwtSecret) 
            req.token = token;
            req.usuarioLoagado = usuario
               next()
        } catch (error) {
            res.status(401).json({err:"Token invalido!"});
        }
    }else{
        res.status(401).json({err:"Token invalido!"});
    }



}
}
module.exports =authApi