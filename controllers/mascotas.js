import mascotasModel from '../models/mascotas.js';

class mascotasController{
    constructor(){

    }
    //consultas generales y detallada
    async create(req,res){
        const{nombre,tipo,raza,edad,descripcion,adoptado}= req.body;
        try {
            const data = await mascotasModel.create({nombre,tipo,raza,edad,descripcion,adoptado});
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e); 
        }
    
    }

       async update(req,res){
        const{nombre,tipo,raza,edad,descripcion,adoptado}= req.body;
        try {
            const {id}=req.params;
            const data = await mascotasModel.update(id,{nombre,tipo,raza,edad,descripcion,adoptado});
            res.status(200).json(data);
        } catch (e) {
            console.log(e);
            res.status(500).send(e); 
        }
    
    }

       async delete(req,res){
            
       try {
           const {id}=req.params;
            const data = await mascotasModel.delete(id);
            res.status(206).json(data);
        } catch (e) {
            res.status(500).send(e); 
        }
    
    }
    // para pedir un solo registro
       async getAll(req,res){
       try {
           const data = await mascotasModel.getAll();
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e); 
        }
    
    }
       async getOne(req,res){
      try {
            const {id}=req.params;
            const data = await mascotasModel.getOne(id);
            res.status(201).json(data);
        } catch (e) {
            res.status(500).send(e); 
        }
}
}

export default new mascotasController();





