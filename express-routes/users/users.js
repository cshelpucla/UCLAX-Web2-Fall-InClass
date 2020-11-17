const express = require('express');
const router = express.Router();

/* Response handler */
const responseHandler = require('../common/responseHandler.js')

const UserModel = require('./UserModel.js')

router.post('/login', (req,res) => { 
    
    console.log('Login processing '); 

    const {
        email,
        password
    } = req.body;

    const RH = responseHandler ({
        title: 'User: Login',
        payloadKey: 'user',
        routerResp: res,
    })

    UserModel
        .findOne({email: email, 
                  password: password})
        .then(RH.dbResp)
        .catch(RH.dbError)

    /*    
    AuctionModel
        .findOne({status: 'current'})
        .then((data) => {
            RH.dbResp = data
            console.log('Retrieved data', RH.dbResp); 
        })
        .catch(RH.dbError)


    AuctionModel.findOne({status: 'current'}, function(err, result) {
            if (err) {
              res.send(err);
            } else {
              res.send(result);
            }
          });
    */      

});

module.exports = router;