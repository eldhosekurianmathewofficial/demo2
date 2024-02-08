const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const countrydata=require("./controllers/countrydata")

const exp=express()
exp.use(express.json())
exp.use(cors())
mongoose.connect("mongodb+srv://eldhosekurianofficial:Jesusislove123@cluster0.ufrxpj4.mongodb.net/countryDB?retryWrites=true&w=majority",{
    useNewUrlParser:true
})
exp.use("/api/country",countrydata)
exp.listen(3005,()=>{
    console.log("Server Running")
})
