const sendingMail = require('../services/emailService');

const sendMail = async (req, res) => {
    try {
        const response = await sendingMail(req, res);
        res.status(200).send(response);
        console.log("response",response)
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).send({ error: "An error occurred while sending the email" });
    }
}

module.exports = {sendMail}