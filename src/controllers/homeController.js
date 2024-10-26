
const getHomepage = (req, res) => {
    res.send('Hello World! node mon')
}
const getSample = (req, res) => {
    res.render('sample.ejs');
}

module.exports = {
    getHomepage,
    getSample
}