module.exports = function(req,res,next){
    
    if (typeof req.session.user == "undefined"){
        res.redirect('/users/login')
    }
    else{   
        next()
    }
}