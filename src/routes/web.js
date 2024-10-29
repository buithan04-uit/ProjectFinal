const express = require('express');
const router = express.Router();
const { getHomepage, getSample, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, postDeleteUser, posyHandleRemoveUser } = require('../controllers/homeController');


// khai bao route

router.get('/', getHomepage)
router.get('/sample', getSample)
router.get('/create', getCreatePage)
router.get('/update/:username', getUpdatePage)
router.get('/delete-user/:username', postDeleteUser)

router.post('/create-user', postCreateUser)
router.post('/update-user', postUpdateUser)
router.post('/delete-user', posyHandleRemoveUser)


module.exports = router;