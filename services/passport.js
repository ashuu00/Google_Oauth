const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const keys=require('../config/keys');
const mongoose=require('mongoose');
const User=mongoose.model('users');//1 arg=fetch 2 arg=load

passport.serializeUser((user,done)=>{
done(null,user.id);/*id piece of feature
not is profile.id,it is a mongo id.
After the user signed in,we only care of
internal id*/

});//Both user and existinguser are the same
//thing,i.e instance of the new created user

passport.deserializeUser((id,done)=>{
    //Cookies implementation
   User.findById(id)
   .then(user=>{
       done(null,user);
   });
   //All find funct in mongo are async
});

passport.use(new GoogleStrategy({
    clientID:keys.GoogleClientId,
    clientSecret:keys.GoogleClientSecret,
    callbackURL: '/auth/google/callback'

},
async (accessToken,refreshToken,profile,done) =>{
const existingUser=await User.findOne({googleID:profile.id});

   //promise have been used as ti is a async funct
    if(existingUser){
        //we already have record with given id
    return done(null,existingUser);
    //1 arg=>for error 
    }
    
        //we dont have record with given id
        const user=await new User({googleID:profile.id,name:profile.displayName})
       return done(null,user);
        //instance of the model
        //Check the video again for the user typecas
    


   
   
    // console.log('access token : ',accessToken);
    // console.log('refresh token : ',refreshToken);
     console.log('profile: ',profile);
   // console.log('done ',accessToken);
}));
//telling passsport that listen to the new strategy we have given.
//oauth is short for open authentication


//for having external libraries functionalities