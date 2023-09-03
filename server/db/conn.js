const mongoose = require('mongoose');
const DB = process.env.DATABASE;
const connectionparams={
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
mongoose.connect(DB,connectionparams)
.then(()=>{
    console.log(`connection successful`);
})
.catch((e)=>{
    console.log(`no connection`)
}
)