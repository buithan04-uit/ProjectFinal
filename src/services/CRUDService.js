const connection = require('../config/database');
const getAllUsers = async () => {
    let [results, fields] = await connection.query(`Select * from Users`);
    return results;
}
const getUsersByUsername = async (username) => {
    let [results, fields] = await connection.query(`Select * from Users Where Username = ?`, [username]);
    let user = results && results.length > 0 ? results[0] : {};
    return user;
}
const updateUserByUsername = async (username, email, password) => {
    let [results, fields] = await connection.query(`Update Users Set Email = ?, Password = ? Where Username = ?`, [email, password, username]);
}
const deleteUserByUsername = async (username) => {
    let [results, fields] = await connection.query(`DELETE FROM Users WHERE Username = ?`, [username]);
}


module.exports = {
    getAllUsers,
    getUsersByUsername,
    updateUserByUsername,
    deleteUserByUsername
}