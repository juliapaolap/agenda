const app1 = {
    data() 
    {
        return {
            contactos: [],
            nuevoContacto: 
            {
                nombre: '',
                telefono: '',
                categoria: 'Familiar',
                mensajes: 0,
                llamadas: 0
            }
        }
    },

    methods: 
    {
        agregarContacto() {
            if (this.nuevoContacto.nombre.length > 0 && this.nuevoContacto.telefono.length > 0) {
                // Creamos un nuevo objeto con las propiedades necesarias
                const nuevoContacto = {
                    nombre: this.nuevoContacto.nombre,
                    telefono: this.nuevoContacto.telefono,
                    categoria: this.nuevoContacto.categoria,
                    mensajes: 0,
                    llamadas: 0
                };
        
                this.contactos.push(nuevoContacto);
        
                // Restablecemos los valores del formulario
                this.nuevoContacto = {
                    nombre: '',
                    telefono: '',
                    categoria: 'Familiar',
                    mensajes: 0,
                    llamadas: 0
                };
            }
        },

        eliminarContacto(index) 
        {
            this.contactos.splice(index, 1);
        }
        /*
        Es un método de los arreglos en JavaScript que permite modificar el contenido de un arreglo.
        index: Indica desde qué posición se comenzará a eliminar.
        - 1: Especifica cuántos elementos se eliminarán a partir de la posición indicada.
    */
    },

    computed: 
    {
        totalMensajes() 
        {
        return this.contactos.reduce((total, contacto) => total + contacto.mensajes, 0);
        },

        totalLlamadas() 
        {
        return this.contactos.reduce((total, contacto) => total + contacto.llamadas, 0);
        }
    }
};

const apli2 = Vue.createApp(app1).mount('#seccion');