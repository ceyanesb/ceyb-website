const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');

admin.initializeApp();

var transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'ceyanesb@gmail.com',
        pass: '2311CeYb9911.-'
    }
});

exports.sendEmail = functions.firestore
    .document('emails/{emailId}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: 'Carlos Yanes <ceyanesb@gmail.com>',
            to: `ceyanesb@gmail.com`,
            subject: `New Message from ${snap.data().name}`,
            html: `<h4>Hey Carlos, someone send you an email through your website</h4>
            <p> <b>Name: </b>${snap.data().name} </p>
            <p> <b>Email: </b>${snap.data().email} </p>
            <p> <b>Message: </b>${snap.data().message} </p>`
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
});

exports.sendEmailToUser = functions.firestore
    .document('emails/{emailId}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: `ceyanesb@gmail.com`,
            to: `${snap.data().email}`,
            subject: 'Message from Carlos Yanes',
            html: `<h4>Hello ${snap.data().name}</h4>
            <p> Hey, thanks for reaching out to me. You are receiving this because you send me a message through on my website!</p>
            <p> <b>Your message: ${snap.data().message} </b> </p>
            <p> I will contact you whithin 48 hours regarding about your message, thank you!</p>
            <br>
            <p> Warm regards,</p>
            <br>
            <p>Carlos Yanes.</p>`
        };
        return transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
});

exports.sendMailOverHTTP = functions.https.onRequest((req, res) => {
    const mailOptions = {
        from: `ceyanesb@gmail.com`,
        to: req.body.email,
        subject: 'Message from Carlos Yanes',
        html: `<h1>Hey</h1>
            <p> <b>Name: </b>${req.body.name} </p>
            <p> <b>Email: </b>${req.body.email} </p>
            <p> <b>Message: </b>${req.body.message} </p>`
    };


    return transporter.sendMail(mailOptions, (error, data) => {
        if (error) {
            return res.send(error.toString());
        }
        var data = JSON.stringify(data)
        return res.send(`Sent! ${data}`);
    });

});
