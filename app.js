const express = require('express'),
      app = express(),
      port = 3000;
// support parsing post request
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});




app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
