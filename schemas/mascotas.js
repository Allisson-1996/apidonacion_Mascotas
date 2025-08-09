import mongoose from "mongoose";

const  mascotaSchema = new mongoose.Schema(
   {
     nombre:{
        type:String,
        requred:true
    },
      tipo:{
        type:String,
        requred:true,
        enum:['perro','gato','conejo'],
    },
      raza:{
        type:String,
         
    },
      edad:{
        type:Number,
        min:[0,'la edad no puede ser negativa'],
        max:[30,'la edad no parece correcta'],
       
    },
      descricion:{
        type:String,
        
    },
      adoptado:{
        type:Boolean,
        default:false,
       
    },


   },{timeseries:true}
);

export default mongoose.model('mascotas',mascotaSchema);