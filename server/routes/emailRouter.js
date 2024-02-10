const express = require('express');
const router = express.Router();


// Route to generate random emails
app.post('/generate-emails', (req, res) => {
  // Extract subject and body from the request body
  const { subject, body } = req.body;

  // Generate a random number (0 or 1) to determine if it's a phishing link or a legitimate link
  const isPhishing = Math.random() < 0.5;

  // Construct the phishing email object
  const phishingEmail = {
    subject: subject,
    body: body,
    link: isPhishing ? 'http://phishing.example.com' : 'http://legitimate.example.com',
    isPhishing: isPhishing
  };

  // Construct the legitimate email object
  const legitimateEmail = {
    subject: subject,
    body: body,
    link: isPhishing ? 'http://legitimate.example.com' : 'http://phishing.example.com',
    isPhishing: !isPhishing
  };

  // Send one of the emails randomly
  const emails = isPhishing ? [phishingEmail, legitimateEmail] : [legitimateEmail, phishingEmail];
  const randomIndex = Math.floor(Math.random() * 2);
  const selectedEmail = emails[randomIndex];

  res.json(selectedEmail);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// will we need a next so it keeps rerunning?

module.exports = router;