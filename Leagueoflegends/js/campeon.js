class Campeon {
    constructor(data) {
        this.name = data.name;
        this.imageUrl = `https://ddragon.leagueoflegends.com/cdn/13.18.1/img/champion/${data.image.full}`; // Usar imagen completa
        this.roles = data.tags; // Obtener los roles (tags) del campeón
        this.title = data.title || "Sin título"; // Cambiar a título
        this.abilities = data.spells; // Obtener las habilidades del campeón
    }

    crearElemento() {
        const championDiv = document.createElement('div');
        championDiv.classList.add('champion');

        const img = document.createElement('img'); // Usar la etiqueta img para la imagen completa
        img.src = this.imageUrl;
        img.alt = this.name;

        const name = document.createElement('p');
        name.textContent = this.name;

        const additionalInfo = document.createElement('div');
        additionalInfo.classList.add('additional-info'); // Contenedor para información adicional
        additionalInfo.innerHTML = `
            <p><strong>Roles:</strong> ${this.roles.join(', ')}</p> <!-- Mostrar solo roles -->
            <p><strong>Título:</strong> ${this.title}</p> <!-- Cambiar a Título -->
        `;

        championDiv.appendChild(img); // Agregar la imagen
        championDiv.appendChild(name);
        championDiv.appendChild(additionalInfo); // Agregar el contenedor de información adicional

        // Evento de clic para mostrar habilidades
        championDiv.addEventListener('click', () => {
            this.mostrarHabilidades();
        });

        return championDiv;
    }

    mostrarHabilidades(championDiv) {
        // Verificar si ya existe un contenedor de habilidades
        let habilidadesDiv = championDiv.querySelector('.habilidades');

        // Si no existe, crear un nuevo contenedor
        if (!habilidadesDiv) {
            habilidadesDiv = document.createElement('div');
            habilidadesDiv.classList.add('habilidades');

            const habilidadesHtml = this.abilities.map(ability => `
                <div class="habilidad">
                    <h4>${ability.name}</h4>
                    <p>${ability.description}</p>
                </div>
            `).join('');

            habilidadesDiv.innerHTML = habilidadesHtml;

            // Añadir el contenedor de habilidades a la tarjeta del campeón
            championDiv.appendChild(habilidadesDiv);
        } else {
            // Si ya existe, alternar su visibilidad
            habilidadesDiv.style.display = habilidadesDiv.style.display === 'none' ? 'block' : 'none';
        }
    }

}
