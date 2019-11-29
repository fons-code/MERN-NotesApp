const {Router} = require('express')
const {addUser,getUser,getUsers,deleteUser,updateUser} = require('../controllers/user.controller')
const router = Router()

router.route('/')
    .get(getUsers)
    .post(addUser)

router.route('/:id')
    .get(getUser)
    .put(updateUser)
    .delete(deleteUser)

module.exports = router;