tareas.addEventListener('click', function(e) {
  e.preventDefault();

  // Vaciar contenido existente
  mainContent.innerHTML = '';

  // Crear contenedor para el título y PDF
  const container = document.createElement('div');

  // Título
  const title = document.createElement('h2');
  title.textContent = 'CLASSE DANI LERIS';
  title.style.textAlign = 'center';
  title.style.marginBottom = '20px';

  // Iframe para PDF
  const iframe = document.createElement('iframe');
  iframe.src = 'https://drive.google.com/file/d/1e9QURnpk_9NBAoEqXKQe-4DIbX5EqvS2/preview';
  iframe.width = '80%';       // Ajusta ancho a 80%
  iframe.height = '500px';     // Ajusta altura
  iframe.style.display = 'block';
  iframe.style.margin = '0 auto'; // Centra horizontalmente
  iframe.style.border = '1px solid #ccc';
  iframe.style.borderRadius = '8px';
  iframe.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)';

  // Insertar elementos en el contenedor
  container.appendChild(title);
  container.appendChild(iframe);

  // Agregar contenedor al main
  mainContent.appendChild(container);
});