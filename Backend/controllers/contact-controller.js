const { portfolioModel } = require("../models/contact-model.js");

let Portfolio = (req, res) => {
    let { name, email, subject, message } = req.body;
    let newPortfolio = new portfolioModel({
        name: name,
        email: email,
        subject: subject,
        message: message,
    });

    newPortfolio.save()
        .then(() => {
            return res.status(200).json({
                message: "Form submitted successfully",
                success: true,
            });
        })
        .catch((err) => {
            res.status(500).json({ error: 'Error submitting form' });
        });
};

module.exports = Portfolio;
