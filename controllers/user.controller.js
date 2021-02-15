const db = require('../models/index');
const users = db.users;
const Op = db.Sequelize.Op;

module.exports.addUser = async (req, res) => {
    try {
        const data = req.body;
        const saveUser = await users.create(data);
        return res.status(201).json({
            status: 201,
            message: saveUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error
        })
    }
}

module.exports.getUsers = async (req, res) => {
    try {
        const email = req.params.emailId;
        const getUser = await users.findAll({
            where: {
                email: {
                    [Op.like]: `%${email}%`
                }
            }
        })
        return res.status(200).json({
            status: 200,
            message: getUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error
        })
    }
}

module.exports.getUser = async (req, res) => {
    try {
        const email = req.params.emailId;
        const getUser = await users.findOne({
            where: {
                email: email
            }
        })
        return res.status(200).json({
            status: 200,
            message: getUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error
        })
    }
}


module.exports.getById = async (req, res) => {
    try {
        const id = req.params.id;
        const getUser = await users.findByPk(id);
        if (!getUser) throw new Error('User not found')
        return res.status(200).json({
            status: 200,
            message: getUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error.message
        })
    }
}

module.exports.updateById = async (req, res) => {
    try {
        const id = req.params.id;
        const data = req.body;
        const update = await users.update(data, { where: { id: id } });
        return res.status(200).json({
            status: 200,
            message: update
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error
        })
    }
}

module.exports.deleteUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteUser = await users.destroy({ where: { id: id } });
        return res.status(200).json({
            status: 200,
            message: deleteUser
        })
    } catch (error) {
        return res.status(500).json({
            status: 500,
            message: 'error occured',
            error: error
        })
    }
}