const div = document.getElementById("lista");

const curso1 = {
    nombre: "Pogramacion II",
    alumnos: [
        { nombre: "Juan", nota: 10 },
        { nombre: "Maria", nota: 30 },
        { nombre: "Carlos", nota: 20 },
        { nombre: "Carla", nota: 40 }
    ]
}
const curso2 = {
    nombre: "Desarrollo Web",
    alumnos: [
        { nombre: "Lili", nota: 30 },
        { nombre: "Cleo", nota: 40 },
        { nombre: "Pedro", nota: 33 },
        { nombre: "Marco", nota: 21 }
    ]
}

const elementos = curso1.alumnos.concat(curso2.alumnos);
elementos.forEach((al) => {
    const lista = document.createElement('li');
    lista.innerText = `${al.nombre} ${al.nota}`;
    if (al.nota > 20) {
        lista.style = "color: blue"
    } else if (al.nota < 11) {
        lista.style = "color: red"
    } else {
        lista.style = "color: green"
    }

    document.body.appendChild(lista);
});

