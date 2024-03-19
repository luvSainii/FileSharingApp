const db = require('mongoose');
 function connectdb(){
    try {
        db.connect(process.env.mongo_uri);
        console.log('Connection Established')
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;