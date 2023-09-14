const mongoose=require('mongoose')

mongoose.connect(process.env.BASE_URL,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>{
    console.log("___Mongodb Atlas Connected__");
}).catch(()=>{
    console.log("___Mdb Atlas Not Connected____");
})
 