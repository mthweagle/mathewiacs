document.getElementById('contactForm').addEventListener('submit', (event) => {
            event.preventDefault();
            document.getElementById('form-status').textContent = 'El formulario aún no está conectado para enviar mensajes.';
        });

/* Sustituye al onclick en línea del selector de idioma (necesario para CSP sin 'unsafe-inline') */
document.querySelectorAll('input[name="language"]').forEach((radio) => {
    radio.addEventListener('click', () => {
        const details = radio.closest('details');
        if (details) details.removeAttribute('open');
    });
});
