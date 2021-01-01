const express = require('express'),
      app = express(),
      port = 3000,
      got = require('got'),
      mailchimp = require('@mailchimp/mailchimp_marketing'),
      config = require(`${__dirname}/config.js`)
// support parsing post request
app.use(express.urlencoded({extended: true}));
// support filepaths for html's src and href
app.use(express.static(`${__dirname}/public`));
// set config for mailchimp api
mailchimp.setConfig({
  apiKey: config.API_KEY,
  server: 'http://localhost:3000'
});


app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/signup.html`);
});

app.post("/", (req, res) => {

  // curl -X POST \
  //   'https://server.api.mailchimp.com/3.0/lists/{list_id}?skip_merge_validation=<SOME_BOOLEAN_VALUE>&skip_duplicate_check=<SOME_BOOLEAN_VALUE>' \
  //   -H 'authorization: Basic <USERNAME:PASSWORD>' \
  //   -d '{"members":[],"update_existing":false}'

  // const run = async () => {
  //   const response = await client.lists.batchListMembers("list_id", {
  //     members: [{}],
  //   });
  //   console.log(response);
  // };
  //
  // run();
}


app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
