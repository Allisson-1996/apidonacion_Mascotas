import 'dotenv/config';
import mongoose from 'mongoose';

class dbClient {
    constructor() {
        this.conectarBaseDatos();
    }

    async conectarBaseDatos() {
        const queryString = `mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@${process.env.SERVER_DB}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
        try {
            await mongoose.connect(queryString);
            console.log("✅ Conexión exitosa a la base de datos");
        } catch (error) {
            console.error("❌ Error al conectar a la base de datos:", error);
        }
    }

    async cerrarConexion() {
        try {
            await mongoose.disconnect();
            console.log("🔌 Conexión cerrada");
        } catch (error) {
            console.error("❌ Error al cerrar la conexión:", error);
        }
    }
}

export default new dbClient();


