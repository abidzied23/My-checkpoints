var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'abidzied23@gmail.com',
        pass: '************'
    }
});

var mailOptions = {
    from: 'abidzied23@gmail.com',
    to: 'abidzied23@gmail.com',
    subject: 'send email',
    text: 'send it fast'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});