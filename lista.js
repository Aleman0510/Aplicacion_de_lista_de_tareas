const botonAgregar = document.getElementById("boton-01");
const inputTarea = document.querySelector(".label");
const listaTareas = document.querySelector(".lista-tareas");
let contador = listaTareas.getElementsByTagName('li').length; // Cuenta las tareas iniciales

botonAgregar.addEventListener("click", () => {
    const tarea = inputTarea.value.trim();
    if (tarea === "") return; // Evitar agregar tareas vacías
    
    const nuevaTarea = document.createElement("li");

    // Crear el texto de la tarea
    const textoTarea = document.createElement("span");
    textoTarea.textContent = tarea;

    // Crear el botón de eliminar
    const botonEliminar = document.createElement("button");
    botonEliminar.textContent = "Eliminar";
    botonEliminar.style.marginLeft = "10px"; // Espacio entre tarea y botón

    // Añadir evento al botón de eliminar
    botonEliminar.addEventListener("click", () => {
        listaTareas.removeChild(nuevaTarea);
        contador--; // Actualizar el contador
    });

    // Añadir estilo según si es par o impar
    contador++;
    if (contador % 2 === 0) {
        textoTarea.style.color = "blue"; // Tarea par, color azul
    } else {
        textoTarea.style.fontWeight = "bold"; // Tarea impar, en negrita
    }

    // Añadir el texto de la tarea y el botón de eliminar al elemento <li>
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar la tarea a la lista
    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = ""; // Limpiar el input
});
