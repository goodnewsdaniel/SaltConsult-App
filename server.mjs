import express from "express";
import nodemailer from "nodemailer";
         
const app = express();
const PORT = process.env.PORT || 5000;

//Middleware
app.use(express.static("public"));
app.use(express.json());


app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.post("/", (req, res) => {
  console.log(req.body)

//GMAIL
  /*const transporter = nodemailer.createTransport({
    service: "gmail",
    auth:{
      user: "gee4luv@gmail.com",
      pass: "G00dan1sm123"
    }
  })
  */

  //CUSTOM MAIL
  const transporter = nodemailer.createTransport({
    host: "smtp.uat.edu.ng",
    port: 587,
    // secure: true,
    auth:{
      user: "goodnews.daniel@uat.edu.ng",
      pass: "G00dan1sm!"
    }
  })

  const mailOptions = {
    from: req.body.email,
    to: "goodnews.daniel@uat.edu.ng",
    subject: `Message from ${req.body.email}: ${req.body.subject}`,
    test: req.body.message
  }

  transporter.sendMail(mailOptions, (error, info)=>{
    if(error){
      console.log(error);
      res.send("error");
    }else{
      console.log(`Email sent: ${info.response}`);
      res.send("Success");
    }
  })
  
})

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
})

