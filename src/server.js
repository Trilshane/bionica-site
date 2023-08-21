const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(587, () => console.log("Server Running"));

const transporter = nodemailer.createTransport({
  host: "smtp.yandex.ru ",
  auth: {
    user: "trilshane@yandex.ru",
    pass: "cwwsrhagjzplzsvu",
  },
});

transporter.verify(function (error, success) {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take our messages");
  }
});

app.post("/send", (req, res) => {
  const name = req.body.name;
  const phone = req.body.phone;
  const email = req.body.email;
  const message = req.body.message;
  const mail = {
    from: name,
    to: "trilshane@yandex.ru",
    subject: "Contact Form Submission",
    html: `<p>Name: ${name}</p>
    <p>Name: ${phone}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
  };
  transporter.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});
