const connection = require('../config/database');
const { getAllUsers, getUsersByUsername, updateUserByUsername,
    deleteUserByUsername } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    let results = await getAllUsers();
    console.log("Check : ", results);
    return res.render('home.ejs', { listUsers: results });
}
const getSample = (req, res) => {
    res.render('sample.ejs');
}
const getCreatePage = (req, res) => {
    res.render('create.ejs');
}

const getUpdatePage = async (req, res) => {
    const username = req.params.username;
    let user = await getUsersByUsername(username);
    res.render('edit.ejs', { userEdit: user });
}

const postCreateUser = async (req, res) => {
    console.log("Check body : ", req.body);
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;

    let [results, fields] = await connection.query(
        `INSERT INTO Users (Username,Email, Password) 
        VALUES (?,?,?);`, [username, email, password]);

    // const [results,fields] = await connection.query(
    //     `Select * from Users`
    // );
    console.log("Check results : ", results);
    res.send("Create user success");
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email;
    let password = req.body.password;
    let username = req.body.username;
    await updateUserByUsername(username, email, password);

    res.redirect('/');
}

const postDeleteUser = async (req, res) => {
    const username = req.params.username;
    let user = await getUsersByUsername(username);
    res.render('delete.ejs', { userDelete: user });
}

const posyHandleRemoveUser = async (req, res) => {
    let username = req.body.username;
    await deleteUserByUsername(username);
    res.redirect('/');
}

module.exports = {
    getHomepage,
    getSample,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    posyHandleRemoveUser
}