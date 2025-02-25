document.getElementById('generar').addEventListener('click', function() {
    const nombre = document.getElementById('nombre').value;
    const titulo = document.getElementById('titulo').value;
    const descripcion = document.getElementById('descripcion').value;
    const proyectos = document.getElementById('proyectos').value.split(',');

    document.getElementById('preview-nombre').innerText = nombre;
    document.getElementById('preview-titulo').innerText = titulo;
    document.getElementById('preview-descripcion').innerText = descripcion;

    const listaProyectos = document.getElementById('preview-proyectos');
    listaProyectos.innerHTML = '';
    proyectos.forEach(proyecto => {
        const li = document.createElement('li');
        li.innerText = proyecto.trim();
        listaProyectos.appendChild(li);
    });

    document.getElementById('portafolio-preview').classList.remove('oculto');
});

// Modo oscuro
const toggleThemeBtn = document.getElementById('toggle-theme');
toggleThemeBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    toggleThemeBtn.innerText = document.body.classList.contains('dark-mode') ? "☀️ Modo Claro" : "🌙 Modo Oscuro";
});