const express=require('express')
const hbs=require('hbs')
const app=express()
const axios = require('axios');
app.set('view engine','hbs')


app.listen(5000,(err)=>{
    (err)?console.log("server not launching"):console.log('server is running')
})
//city to search the weather for
let city ='New York'


app.get('/',(req,res)=>{
    
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2b25ceab5eef61102e75ca2e33863e0b`)
    .then(response => {
        let weather={city:response.data.name,
                 temperature:Math.round(response.data.main.temp),
                 description:response.data.weather[0].description,
                 icon:response.data.weather[0].icon}
                 console.log(weather)
                 res.render('home.hbs',{weather});
    })
    .catch(error => {
      console.log(error);
    });

})

  
  
  

