const express = require('express'),
      app = express(),
      port = 3000,
      got = require('got');
// support parsing post request
app.use(express.urlencoded({extended: true}));
// support filepaths for html's src and href
app.use(express.static(`${__dirname}`));


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, res) => {

})



app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
