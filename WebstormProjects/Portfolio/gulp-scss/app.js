const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
// const swal = require('sweetalert');

const app = express();

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use('/public', express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('contact');
});

app.post('/send', function (req, res) {
    console.log(req.body);
    const output = `
         <p>You have a new contact request</p>
         <h3>Contact details</h3>
         <ul>
         <li>Name:${req.body.Name}</li>
         <li>Email:${req.body.Email}</li>
         <li>Message:${req.body.Message}</li>
         </ul>`;

    nodemailer.createTestAccount(function (err, account) {
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: 'abhisheksavekar61@gmail.com', // generated ethereal user
                pass: 'engineerrocksabhiABHI10@' // generated ethereal password
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Contact from profolio" <abhisheksavekar61@gmail.com>', // sender address
            to: 'abhisheksavekar61@gmail.com', // list of receivers
            subject: 'Website contact request', // Subject line
            text: 'Hello world?', // plain text body
            html: output // html body
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
            console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
            res.render('contact');
        });
    });
});

app.listen(8085, function () {
    console.log('server started...');
});


