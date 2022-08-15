const express = require('express')
const router = express.Router()
const axios = require('axios')

router.all('/*', (req,res)=>{
    // res.send(req.params.apiname)
    let config = {
        method: req.method,
        data: req.body? req.body: {},
    };
    if(["users","movies"].includes(req.params[0].split('/').shift())){
        console.log('ok')
        config = {
            ...config,
            url: 'http://localhost:3001/'+ req.params[0],
        }
    }else if(["rating"].includes(req.params[0].split('/').shift())){
        config = {
            ...config,
            url: 'http://localhost:3002/'+ req.params[0],
        }
    }else{
        return res.status(404).json({message: "Url Not Found!"});
    }
    try {
        console.log({config})
        // contat authorization server first before making any request
        axios(config).then((response)=>{
            res.send(response.data)
        }).catch(err=>{
            console.log({err})
            res.send(err)
        })
    } catch (error) {
        console.log({error})
    }
})
module.exports = router;