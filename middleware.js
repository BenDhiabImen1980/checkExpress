function middleware(req,res,next){
let d=Date.now()
let today=new Date(d)
let day=today.getDay()
let hour=today.getHours()

if (day>=1 && day<=5 && hour>=9 && hour<=17){
    next()
}
else{
    // res.send("not disponibility")
    res.redirect('/error.html')
}
}

module.exports=middleware