const express = require('express'),
      app = express(),
      port = 3000,
      config = require(`${__dirname}/config.js`),
      https = require('https');
// support parsing post request
app.use(express.urlencoded({extended: true}));
// support filepaths for html's src and href
app.use(express.static(`${__dirname}/public`));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, res) => {
  const data = {
    members: [
      {
        email_address: req.body.email,
        status: "subscribed",
        merge_field: {
          FNAME: req.body.firstName,
          LNAME: req.body.lastName
        }
      }
    ]
  };

  const jsonData = JSON.stringify(data);
  const url = `https://us7.api.mailchimp.com/3.0/lists/${config.LIST_ID}`;
  const options = {
    method: 'POST',
    auth: `rafal:${config.API_KEY}`
  }

  const request = https.request(url, options, (response) => {
    response.on("data", (data) => {
      console.log(JSON.parse(data));
    });

    if ( response.statusCode === 200 ) {
      res.sendFile(`${__dirname}/success.html`);
    } else {
      res.sendFile(`${__dirname}/failure.html`);
    }
  });
  request.write(jsonData);
  request.end();
});


app.post("/failure", (req, res) => {
  // res.sendFile(`${__dirname}/signup.html`);
  res.redirect("/");
});


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
