
// Solo informativo para ruta "/"

module.exports = {
    status: "success, server running.",
    api_directions:
        [{
            name: "Senias",
            colection: [
                { api_address: "/api/senias", type: "get", status: "available", description: "api_directions_descriptor" },
                { api_address: "/api/senias", type: "post", status: "available" },
                { api_address: "/api/senias", type: "put", status: "available" },
                { api_address: "/api/senias", type: "delete", status: "available" },
            ]
        }, {
            name: "Users",
            colection: [
                { api_address: "/api/users", type: "get", status: "available", description: "api_directions_descriptor" },
                { api_address: "/api/users", type: "post", status: "available" },
                { api_address: "/api/users", type: "put", status: "available" },
                { api_address: "/api/users", type: "delete", status: "available" },
            ]
        }]
}
