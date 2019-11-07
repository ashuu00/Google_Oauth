const mongoose=require('mongoose');
//const Schema=mongoose.Schema;
const { Schema }=mongoose;//es15 code for
//condensing the code
/* it says mongoose has a schema property
take that and add to the given schema */

//Schema to define all diff properties

const userSchema=new Schema({
    googleID: String,
    name: String
});

mongoose.model('users',userSchema);
//telling mongoose that we are creating new colllection
//TODO
//Create a local database with mongoose or
//see how to make database to deploy to
//heroku