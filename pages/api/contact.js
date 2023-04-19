const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

const sendMail =  async (req, res) => {
  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject:${body.subject}\r\n
    Message: ${body.message}
  `;

  await mail.send({
    to: 'mdalaa7911@gmail.com',
    from: 'mdalaa7911@gmail.com',
    subject: 'New Message!',
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  });

  res.status(200).json({ status: 'Ok' });
}

export default sendMail;
