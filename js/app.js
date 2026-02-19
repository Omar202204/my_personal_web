const btn_modales = document.querySelector("#modalesInteractivos")

btn_modales.addEventListener("click", () => window.location.href = "pages/ModalesInteractivos.html")


// Boton para activar notificaciones 
const btn_notificacion = document.querySelector("#notificacion")

btn_notificacion.addEventListener("click", async () => {

    if(Notification.permission !== "granted") {
        permiso = await Notification.requestPermission()
        .then(resultado => console.log(`Notificacion aprobada ${resultado}`))

    }

    // Notification.requestPermission()
    //     .then(resultado => console.log(`Notificacion aprobada ${resultado}`))

    if(Notification.permission === 'granted'){
        console.log("Notificacion mandada");
        new Notification("Esta es tu primer notificación !", {
            icon: "images/campanita.png",
            body: "Hola mundo"
        })
    }
    })


