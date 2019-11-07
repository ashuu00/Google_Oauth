const passport=require('passport');

module.exports=app=>{
app.get('/auth/google',
passport.authenticate('google',{
    scope:['profile','email']
}));

app.get('/auth/google/callback',
passport.authenticate('google'));
//returns whoever curr logged in in futture
//we will define it
app.get('/api/current_user',(req,res)=>{
    console.log(req.user);
    res.send(req.user);
    //get access to the user
});
};
