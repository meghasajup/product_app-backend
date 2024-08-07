require('dotenv').config();
const express = require ('express')
const app = express()

const morgan = require('morgan')
require('./db')
const cors = require('cors')
const upload = require('./utils/multer')// add multer
const PORT = process.env.PORT || 4528;
const routes = require('./routes')
app.use(cors({
    origin: '*'
}))
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(morgan('dev'))
app.use('/',routes)
app.use(upload.single('image'));//specify the field

app.listen(PORT, () => {
    console.log('Serving on PORT:' + PORT);
})