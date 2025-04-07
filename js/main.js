
// Validación básica del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nombre = form.querySelector("input[type='text']").value.trim();
        const email = form.querySelector("input[type='email']").value.trim();
        const mensaje = form.querySelector("textarea").value.trim();

        if (!nombre || !email || !mensaje) {
            alert("Por favor, completa todos los campos antes de enviar.");
        } else {
            alert("¡Gracias por contactarnos! 🎉");
            form.reset();
        }
    });
});
