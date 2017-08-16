let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        messages.push({ id, text, time });
        id++;
        res.status(200).send( messages )
    },
    read: (req, res) => {

    },
    update: (req, res) => {

    },
    delete: (req, res) => {

    }
}
