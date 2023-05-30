const express= require("express")
const app =express()

app.use(express.json())

const cors= require("cors")
app.use(cors())

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://anwarghannam319:KvphXWuWoukFkDak@cluster0.xecauod.mongodb.net/bsporty?retryWrites=true&w=majority")

const CompitionRoute = require("./router/compitionRout")
app.use('/api/compition',CompitionRoute)

const NewsRoute = require("./router/newsRoutt")
app.use('/api/news',NewsRoute)

const EventsRoute = require("./router/eventsRout")
app.use('/api/event',EventsRoute)

const TelentRoute = require("./router/telentFormRout")
app.get('/api/telent',TelentRoute.getTelentForm)
app.post('/api/telent',TelentRoute.TelentForm)

const SportsRoute = require("./router/sportFacRout")
app.use('/api/sports',SportsRoute)



// const RegesterRoute = require("./router/regesterRout")
// app.post('/regester',RegesterRoute.registerUser)

const rRout=require("./router/r")
app.post('/api/regester',rRout.registerUser)

const loginRout=require("./router/login")
app.post('/api/login',loginRout.loginUser)

app.listen("3001", ()=>{
    console.log("server works ")
})