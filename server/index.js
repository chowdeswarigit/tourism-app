// const express = require("express");
// const mongoose = require("mongoose");
// // const userRoute = require("./Routes/UserRoute");
// const cors=require("cors")

// const MONGO_URL = "mongodb+srv://Chowdeswari:<code123>@cluster0.swqtopb.mongodb.net/?retryWrites=true&w=majority"
// mongoose.connect(MONGO_URL).then(() => {
//   console.log("chowdeswari db connected")
// }).catch((err) => {
//   console.log("Db not connected")
// })
// const app = express()
// app.use(express.json())
// app.use(cors())





// const express = require("express") 
// const cors = require("cors") 
// const mongoose = require("mongoose")
// const app = express() 


// app.use(cors) 


// app.get('/',(req,res)=>{

//     console.log("Hello Node js") 
//     res.send("Hello Node js")
// })

// app.listen(port, ()=>{
//     console.log(`server is connected to port ${port}`)
// })

// const MONGO_URL = "mongodb+srv://Chowdeswari:<code123>@cluster0.swqtopb.mongodb.net/?retryWrites=true&w=majority"

// // // mongoose.connect("mongodb+srv://Chowdeswari:<code123>@cluster0.swqtopb.mongodb.net/?retryWrites=true&w=majority").then(()=>{
// // //     app.listen(port , () =>
// // //         console.log(`server is connected to port ${port}`)
// // // }).catch((error)=> console.log(`${error} do not connected`)) 

// // mongoose.connect("mongodb+srv://Chowdeswari:<code123>@cluster0.swqtopb.mongodb.net/?retryWrites=true&w=majority").then(()=>{
// //     app.listen(port,() =>
// //     console.log(`server is conncted to ${port}`)
// //     )
// // }).catch((error) => console.log(`${error} did'nt connected`))

// mongoose.connect(MONGO_URL)
const express = require("express");
const mongoose = require("mongoose");
// const userRoute = require("./Routes/UserRoute");
const signup = require('./Routes/user')
const cors=require("cors");
// const signIn = require("./controller/signin");
const logIn = require("./Routes/signin");
const  TaskRoute =  require("./Routes/Task.js")
const googleSign = require("./Routes/googleSignIn");
const TourController = require("./controller/tour");
const app = express()
app.use(express.json())
app.use(cors())
app.use('/',signup)
app.use('/',logIn)
app.use('/',googleSign)
app.use('/',TourController)
app.use('/task' ,TaskRoute)
 
mongoose.connect('mongodb+srv://chowdeswari:chow123@cluster0.extegca.mongodb.net/todo?retryWrites=true&w=majority').then(() => {
   app.listen(5000, () => console.log("App is connected to port 5000 "))
}).catch((err) => {
  console.log("Db not connected")
})
