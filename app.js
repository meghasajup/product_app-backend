const express = require ('express')
const app = express()
const routes = require('./routes')
const morgan = require('morgan')
require('dotenv').config();
require('./db')
const cors = require('cors')

const PORT = process.env.PORT || 4528;
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use('/',routes)

app.listen(PORT, () => {
    console.log('Serving on PORT:' + PORT);
})