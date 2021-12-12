
// Solo informativo para ruta "/"

module.exports = {
    status: "success, server running.",
    api_directions:
        [
            {
                name: "User",
                colection: [
                    { api_address: "/api/signup", type: "post", description: "registro usuario" },
                    { api_address: "/api/login", type: "post", description: "iniciar sesion usuario" },
                    { api_address: "/api/refreshToken", type: "post", description: "obtener nuevo refreshToken" },
                    { api_address: "/api/logout", type: "get", description: "terminar sesion usuario" },
                    { api_address: "/api/me", type: "get", description: "info usuario pruebas" },
                ]
            }, {
                name: "Senias",
                colection: [
                    { api_address: "/api/senia", type: "get", description: "obtener lista senias" },
                    { api_address: "/api/senia/:id", type: "get", description: "obtener senia por id" },
                    { api_address: "/api/senia", type: "post", description: "registrar senia" },
                    { api_address: "/api/senia/:id", type: "put", description: "actualizar senia por id" },
                    { api_address: "/api/senia/:id", type: "delete", description: "eliminar senia por id" },
                ]
            },
            {
                name: "Games",
                colection: [
                    { api_address: "/api/activities", type: "post", description: "registrar actividades" },
                    { api_address: "/api/history", type: "post", description: "Obtener Historial" },
                    { api_address: "/api/historycontent", type: "post", description: "Obtener Detalle Historial" },
                    { api_address: "/api/game/easy", type: "get", description: "Obtener Senia para juego Facil" },
                    { api_address: "/api/game/medium", type: "get", description: "Obtener Senia para juego Medio" },
                    { api_address: "/api/game/hard", type: "get", description: "Obtener Senia para juego Dificil" },
                ]
            }]
}
