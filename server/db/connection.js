const mongoose = require('mongoose');
const DB = process.env.DB_URL;
const PORT = process.env.PORT;
mongoose.connect(DB).then(() => {
    console.log('Connection successful');
}).catch((err) => console.error('Connection failed:', err))