const app = {
    data() {
        return {
            progreso: 0,
            clase: 0,
            pendientes: [
                { texto: "sacar a pasear al perro", tachado: false },
                { texto: "hacer la tarea de ingles", tachado: false },
                { texto: "lavar la ropa", tachado: false },
                { texto: "lavar platos", tachado: false },
                { texto: "limpiar el cuarto", tachado: false },
            ],
            conteo: 0
        }
    },
    methods: {
        aumento() {
            if (this.progreso < 100) this.progreso++;
            this.validar();
        },
        decremento() {
            if (this.progreso > 0) this.progreso--;
            this.validar();
        },
        validar() {
            if (this.progreso >= 1 && this.progreso <= 40) {
                this.clase = 0;
            } else if (this.progreso >= 41 && this.progreso <= 70) {
                this.clase = 1;
            } else {
                this.clase = 2;
            }
        },
        tacharTexto(tarea) {
            tarea.tachado = !tarea.tachado;
            this.actualizarConteo();
        },
        actualizarConteo() {
            this.conteo = this.pendientes.filter(tarea => tarea.tachado).length;
        }
    },
    computed: {
        cambioColor() {
            return {
                colorVerde: this.clase == 0,
                colorAmarillo: this.clase == 1,
                colorRojo: this.clase == 2,
            };
        },
    },
};
Vue.createApp(app).mount('#seccion');