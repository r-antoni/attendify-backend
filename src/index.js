require('dotenv').config();
const express = require('express');
const PORT =  process.env.SERVER_PORT;
const cors = require('cors')
const {sequelize} = require('./Models')
const teacherRouter = require('./Routes/teacherRoutes')
const studentRouter = require('./Routes/studentRoutes')
const adminRouter = require('./Routes/adminRoutes')


const app = express();

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cors({origin: true, credentials: true}))


sequelize.authenticate().then(function(error){
    console.log('database connect succesfully')
}).catch(function(error){
    console.log('unablecto connect database' + error)
})

app.get("/home", (req, res) =>{
    res.send({

    })
})
app.use('/api' , adminRouter)
app.use('/api/admin' , teacherRouter)
app.use('/api/admin' , studentRouter)

app.listen(PORT, () =>{
    console.log(`listen at localhost:${PORT}`)
})
