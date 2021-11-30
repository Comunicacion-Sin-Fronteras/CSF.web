const Administrador = require('../models/administrador.model')

createNewAdmin = (req, res) => {
    const body = req.body;
    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No se enviaron datos',
        })
    }

    const Admin = new Administrador();
    Admin.Nombre_Administrador = body.Nombre_Administrador
    Admin.Correo_Electronico = body.Correo_Electronico
    Admin.Fecha_de_Nacimiento = body.Fecha_de_Nacimiento
    Admin.Contraseña = body.Contraseña
    Admin.NombreAdminRegistra = "David"//Como recuperamos el nombre de la sesion actual?

    Admin.save()
        .then(result => {
            return res.status(201).json({
                success: true,
                id: result._id,
                message: 'Administrador Creado',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Administrador no creado',
            })
        });
}

getDataAdmin = (req,res) => {
    console.log(req.query.id)
    Administrador.findById(req.query.id, (err, result) => {
        if(err){
            return res.status(400).json({
                success: false,
                error: err,
                message: 'Problema al buscar los datos'
            })
        }
        if(result == null){
            return res.status(400).json({
                success: false,
                message: 'No existe el admin'
            })
        }
        console.log(result)
        return res.status(200).json({
            success: true,
            message: 'Busqueda Exitosa',
            data: result,
        })
    })
}

updateDataAdmin = (req,res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No se enviaron datos',
        })
    }

    Administrador.findOne(body.id, (err,admin)=>{
        if (err) {
            return res.status(404).json({
                err,
                message: 'Administrador no Registrado',
            })
        }

        console.log(admin)

        admin.Nombre_Administrador = body.Nombre_Administrador
        admin.Correo_Electronico = body.Correo_Electronico
        admin.Fecha_de_Nacimiento = body.Fecha_de_Nacimiento
        admin.Contraseña = body.Contraseña

        admin.save()
        .then(result=> {
            return res.status(200).json({
                success: true,
                datos: result,
                message: 'Datos Actualizados',
            })
        })
        .catch(error=>{
            console.log(error)
            return res.status(400).json({
                error,
                message: 'Datos no actualizados',
            })
        })
    })
}

getAllAdmins = async (req,res) => {
    
    const Admins = await Administrador.find({})
    return res.status(200).json({
        success: true,
        data: Admins,
        message: 'Consulta Exitosa',
    })
    
}

deleteAdmin = (req,res)=> {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'No se enviaron datos',
        })
    }

    Administrador.findByIdAndRemove({_id: body.id},(result)=>{
        if(result == null) {
            return res.status(400).json({
                success: false,
                message: 'El administrador no existe' 
            })
        }

        console.log(result)

        return res.status(200).json({
            success: true,
            message: 'Eliminado con Exito'
        })
    })
}

module.exports = {
    createNewAdmin,
    updateDataAdmin,
    deleteAdmin,
    getDataAdmin,
    getAllAdmins
}