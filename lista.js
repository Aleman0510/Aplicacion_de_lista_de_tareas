const botonAgregar = document.getElementById("boton-01");
const inputTarea = document.querySelector(".label");
const listaTareas = document.querySelector(".lista-tareas");
let contador = listaTareas.getElementsByTagName('li').length; // Cuenta las tareas iniciales

botonAgregar.addEventListener("click", () => {
    const tarea = inputTarea.value.trim();
    if (tarea === "") return; // Evitar agregar tareas vacías
    
    const nuevaTarea = document.createElement("li");

    // Crear el checkbox para marcar como terminado
    const checkboxTarea = document.createElement("input");
    checkboxTarea.type = "checkbox";
    checkboxTarea.style.marginRight = "10px"; // Espacio entre checkbox y texto de tarea

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

    // Evento para marcar la tarea como terminada
    checkboxTarea.addEventListener("change", () => {
        if (checkboxTarea.checked) {
            textoTarea.style.textDecoration = "line-through"; // Tachar el texto
            textoTarea.style.color = "gray"; // Cambiar color para mostrar que está terminada
        } else {
            textoTarea.style.textDecoration = "none"; // Quitar el tachado si se desmarca
            textoTarea.style.color = contador % 2 === 0 ? "blue" : ""; // Restaurar color original
        }
    });

    // Añadir estilo según si es par o impar
    contador++;
    if (contador % 2 === 0) {
        textoTarea.style.color = "blue"; // Tarea par, color azul
    } else {
        textoTarea.style.fontWeight = "bold"; // Tarea impar, en negrita
    }

    // Añadir el checkbox, el texto de la tarea y el botón de eliminar al elemento <li>
    nuevaTarea.appendChild(checkboxTarea);
    nuevaTarea.appendChild(textoTarea);
    nuevaTarea.appendChild(botonEliminar);

    // Agregar la tarea a la lista
    listaTareas.appendChild(nuevaTarea);
    inputTarea.value = ""; // Limpiar el input
});
