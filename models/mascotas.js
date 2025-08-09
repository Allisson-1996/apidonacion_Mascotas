import mongoose from 'mongoose';
import Mascota  from '../schemas/mascotasChe.js';

// funciones de schema  definidas 
class mascotasModel{
    async create(mascota){
        return await Mascota.create(mascota);

    }
    async update(id,mascota){
        return await Mascota.findByIdAndUpdate({_id: new mongoose.Types.ObjectId(id)},mascota,{new:true});

    }
    async delete(id){
       return await Mascota.findByIdAndDelete({_id: new mongoose.Types.ObjectId(id)});

    }
    async getAll(){
      return await Mascota.find();

    }
    async getOne(id){
       return await Mascota.findById(id);
    }
}

export default new mascotasModel();