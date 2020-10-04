module.exports = function(req,res,next){
    if(req.cookies.userRmr){
        req.session.user = req.cookies.userRmr;
        res.locals.user = req.session.user  
        next()
    }else{
        next()
    }
}