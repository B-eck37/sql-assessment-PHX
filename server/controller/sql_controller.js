module.exports = {
    getUsers(req, res){
        req.app.get('db').get_users().then(users => {
            res.status(200).send(users);
        })
    },
    getVehicles(req, res){
        req.app.get('db').get_vehicles().then(vehicles => {
            res.status(200).send(vehicles);
        })
    },
    addUser(req, res){
        const {name, email} = req.body;
        req.app.get('db').add_user(name, email).then(user => {
            res.status(200).send(user)
        })
    },
    addVehicle(req,res){
        const {make, model, year, owner_id} = req.body;
        req.app.get('db').add_vehicle(make, model, year, owner_id).then(vehicle => {
            res.status(200).send(vehicle)
        })
    },
    getVehicleCount(req,res){
        const {userId} = req.params;
        req.app.get('db').get_count(userId).then(count => {
            res.status(200).send(count)
        })
    },
    getUserVehicles(req, res){
        const {userId} = req.params;
        req.app.get('db').get_user_vehicles(userId).then(vehicles => {
            res.status(200).send(vehicles)
        })
    },
    //NEEDS WORK
    getByEmail(req, res){
        const {email} = req.body
        req.app.get('db').get_by_email(email).then(vehicles => {
            res.status(200).send(vehicles)
        })
    },
    //NEEDS WORK
    getByLetters(req,res){
        const {letters} = req.body
        req.app.get('db').get_by_letters(letters).then(vehicles => {
            res.status(200).send(vehicles)
        })
    },
    getByYear(req, res){
        req.app.get('db').get_by_year().then(vehicles => {
            res.status(200).send(vehicles)
        })
    },
    changeOwnership(req, res){
        const {userId, vehicleId} = req.params;
        req.app.get('db').change_ownership(vehicleId, userId).then(vehicle => {
            res.status(200).send(vehicle);
        })
    },
    //NEEDS WORK
    deleteOwnership(req,res){
        const {userId, vehicleId} = req.params;
        req.app.get('db').delete_ownership(userId, vehicleId).then(vehicle => {
            res.status(200).send(vehicle);
        })
    },
    deleteVehicle(req, res){
        const {vehicleId} = req.params;
        req.app.get('db').delete_vehicle(vehicleId).then(vehicles => {
            res.status(200).send(vehicles);
        })
    }
}