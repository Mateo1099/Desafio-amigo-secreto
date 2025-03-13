// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


// Array para almacenar los nombres
let amigos = [];

// Función para añadir amigos a la lista
function agregarAmigo() {
    const nombre = document.getElementById('amigo').value.trim();
    
    if (nombre === '') return;
    if (amigos.includes(nombre)) return;
    
    amigos.push(nombre);
    
    // Actualizar lista visual
    const li = document.createElement('li');
    li.className = 'name-item';
    li.innerHTML = `<span>${nombre}</span><button onclick="eliminarAmigo('${nombre}')">X</button>`;
    document.getElementById('listaAmigos').appendChild(li);
    
    document.getElementById('amigo').value = '';
}

// Función para eliminar amigos
function eliminarAmigo(nombre) {
    amigos = amigos.filter(amigo => amigo !== nombre);
    document.getElementById('listaAmigos').innerHTML = '';
    
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.className = 'name-item';
        li.innerHTML = `<span>${amigo}</span><button onclick="eliminarAmigo('${amigo}')">X</button>`;
        document.getElementById('listaAmigos').appendChild(li);
    });
}

// Función para sortear amigos
function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Necesitas al menos 3 amigos');
        return;
    }
    
    document.getElementById('resultado').innerHTML = '';
    
    // Crear copia y mezclar
    const mezclados = [...amigos];
    for (let i = mezclados.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mezclados[i], mezclados[j]] = [mezclados[j], mezclados[i]];
    }
    
    // Mostrar asignaciones
    for (let i = 0; i < mezclados.length; i++) {
        const secreto = mezclados[(i + 1) % mezclados.length];
        const li = document.createElement('li');
        li.className = 'result-item';
        li.textContent = `${mezclados[i]} → ${secreto}`;
        document.getElementById('resultado').appendChild(li);
    }
}