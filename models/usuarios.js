import Usuario from '../schemas/usuarios.js';

class usuariosModel {
    async create(usuario) {
        return await Usuario.create(usuario);
    }

    async update(id, usuario) {
        return await Usuario.findByIdAndUpdate(id, usuario, { new: true });
    }

    async delete(id) {
        return await Usuario.findByIdAndDelete(id);
    }

    async getAll() {
        return await Usuario.find();
    }

    async getOneById(id) {
        return await Usuario.findById(id);
    }

    async getOne(filtro) {
        return await Usuario.findOne(filtro);
    }
}

export default new usuariosModel();
