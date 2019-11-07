const express=require('express');
const BodyParser=require('body-parser');
const mongoose=require('mongoose');
const keys=require('./config/keys');
const cookieSession=require('cookie-session');
const passport=require('passport');


//mogoose to connect with database which is remote server
require('./models/User');
require('./services/passport.js');
mongoose.connect(keys.mogoURI,{useNewUrlParser:true});

//as we are not referring to any particular object form passport file,
//we will only require the file
//its oauth20 because its 2.0 version but '.' cant be used in npm.
const app=express();
//we use keys so that our password is not public

app.use(
    cookieSession({
        //configurations property
        maxAge:30*24*60*60*1000,  //longest time for it to be active
        keys:[keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());
//telling passsport to use our cookies and
//manage our authentication


require('./routes/authRoutes')(app);
//just after requiring the file ,we are passing the parametres inside
//another parenthesis.
//normal javascript code just works fine.

const PORT=process.env.PORT||8000;
app.listen(PORT,()=>{
    console.log("Server created successfully");
});
//Client ID
//
//can be shared to the public

//Client Secret
//
//we dont want anyone to see