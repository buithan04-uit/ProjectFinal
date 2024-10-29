const connection = require('../config/database');
const { getAllUsers } = require('../services/CRUDService');

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

module.exports = {
    getHomepage,
    getSample,
    postCreateUser,
    getCreatePage
}