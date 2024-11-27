class UsuariosModel {
    #orientDB;

    constructor() {
        Object.preventExtensions(this);
    }

    defineModel = async (orientDB) => {
        this.#orientDB = await orientDB;
    }

    // Fetch all users
    fetchUsersAll = async () => {
        let session = await this.#orientDB.pool.acquire();
        let data = await session.select().from('manga').all();
        session.close();
        return data;
    }

    createUsers = async (object) => {
        let session = await this.#orientDB.pool.acquire();
        let idRecord = await session.create('Vertex', 'manga').set(object).one();
        return idRecord;
    }

    // Update a user by ID
    updateUsers = async (id_manga, object) => {
        let session = await this.#orientDB.pool.acquire();
        try {
            // Realizamos la actualización del manga con el campo id_manga
            let result = await session.update('manga')
                .set(object)
                .where({ 'id_manga': id_manga }) // Usamos id_manga en lugar de @rid
                .return('AFTER')
                .one();

            return result;
        } catch (error) {
            throw new Error('Error actualizando el manga');
        } finally {
            session.close(); // Cierra la sesión de OrientDB
        }
    };

    // Delete a user by ID
    deleteUser = async (id_manga) => {
        let session = await this.#orientDB.pool.acquire();
        let deletedCount = await session.delete('Vertex', 'manga').where({ id_manga }).one();
        return deletedCount; 
    }
}

module.exports = new UsuariosModel();
