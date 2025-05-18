// Clase Estudiante que implementa la interfaz
class Estudiante {
    // Constructor
    constructor(id, nombre, apellido, edad, carrera, semestre = 1, materias = [], promedio = 0, estaActivo = true) {
        this.id = id;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.carrera = carrera;
        this.semestre = semestre;
        this.materias = materias;
        this.promedio = promedio;
        this.estaActivo = estaActivo;
    }
    // Métodos
    obtenerNombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    inscribirMateria(materia) {
        if (!this.materias.includes(materia)) {
            this.materias.push(materia);
            console.log(`${this.obtenerNombreCompleto()} se ha inscrito en ${materia}`);
        }
        else {
            console.log(`${this.obtenerNombreCompleto()} ya está inscrito en ${materia}`);
        }
    }
    darDeBaja(materia) {
        const indice = this.materias.indexOf(materia);
        if (indice !== -1) {
            this.materias.splice(indice, 1);
            console.log(`${this.obtenerNombreCompleto()} se ha dado de baja de ${materia}`);
        }
        else {
            console.log(`${this.obtenerNombreCompleto()} no está inscrito en ${materia}`);
        }
    }
    actualizarPromedio(nuevasCalificaciones) {
        if (nuevasCalificaciones.length === 0)
            return;
        let sumaTotal = 0;
        for (const item of nuevasCalificaciones) {
            sumaTotal += item.calificacion;
        }
        this.promedio = sumaTotal / nuevasCalificaciones.length;
        console.log(`Promedio actualizado: ${this.promedio.toFixed(2)}`);
    }
    avanzarSemestre() {
        this.semestre++;
        console.log(`${this.obtenerNombreCompleto()} ha avanzado al semestre ${this.semestre}`);
    }
    mostrarInfo() {
        console.log(`
        Información del Estudiante:
        ID: ${this.id}
        Nombre: ${this.obtenerNombreCompleto()}
        Edad: ${this.edad} años
        Carrera: ${this.carrera}
        Semestre: ${this.semestre}
        Materias: ${this.materias.join(', ')}
        Promedio: ${this.promedio.toFixed(2)}
        Estado: ${this.estaActivo ? 'Activo' : 'Inactivo'}
      `);
    }
}
// Ejemplo de uso
const estudiante1 = new Estudiante(1, "Juan", "Pérez", 20, "Ingeniería Informática", 3, ["Programación", "Matemáticas", "Física"]);
estudiante1.mostrarInfo();
estudiante1.inscribirMateria("Bases de Datos");
estudiante1.actualizarPromedio([
    { materia: "Programación", calificacion: 9.5 },
    { materia: "Matemáticas", calificacion: 8.7 },
    { materia: "Física", calificacion: 7.8 },
    { materia: "Bases de Datos", calificacion: 9.0 }
]);
estudiante1.mostrarInfo();
