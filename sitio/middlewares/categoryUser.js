module.exports = function(req,res,next){
    
    if (req.session.category == 'Admin') {
        
       next()
      }  
   
      else {
        res.redirect('/')
      }
}