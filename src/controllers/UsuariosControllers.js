class UsuariosControllers {
    constructor() {
        Object.preventExtensions(this);
    }

    // Obtener todos los usuarios
    fetchUsers = async (req, resp) => {
        const data = "📜 ¡Usuarios encontrados! Aquí está la lista, como si fuera el pergamino del Hokage.";
        resp.status(200).json({ message: data });
    }

    // Crear un nuevo usuario
    createUsers = async (req, resp) => {
        const data = "✨ ¡Un nuevo héroe ha nacido! El usuario ha sido creado con éxito. 🥷";
        resp.status(200).json({ message: data });
    }

    // Actualizar un usuario
    updateUsers = async (req, resp) => {
        const data = "🔧 ¡Mejora completada! El usuario ahora está listo para la próxima batalla.";
        resp.status(200).json({ message: data });
    }

    // Eliminar un usuario
    deleteUsers = async (req, resp) => {
        const data = "☠️ ¡El usuario ha sido eliminado! Como si desapareciera en un portal oscuro... 🔮";
        resp.status(200).json({ message: data });
    }
}

module.exports = UsuariosControllers;
