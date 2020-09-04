module.exports = {
    home: (req, res) => {
        
        res.render('index' , {title : 'RMR',
        css:'style.css'})
    }
}