const mongoose = require('mongoose');
const Schema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        unique:true
    },
    password:{
type:String
    },
    confirmPassword:{
        type:String
    }
})
const ds = new mongoose.Schema ({
    name:{
        type:String
    },
    mobileno:{
        type:String
    },
    item:{
        type:String
    },
    price:{
        type:String
    },
    address:{
        type:String
    }
})
const UserModel =  mongoose.model('schema',Schema);
const DataModel = mongoose.model('dsmodel',ds);
module.exports = { UserModel, DataModel }; 