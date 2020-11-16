require("dotenv").config();
const port = process.env.SERVER_PORT;
const host = process.env.SERVER_HOST;
const baseUrl = `${host}${port}`;
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./src/routes/routerUser/Auth")(app);

app.get("/info", (req, res) => {
  res.status(200).send({
    routes: [
      {
        message: "Para se Registrar no sistema.",
        router: `[POST] ${baseUrl}/auth/register`,
        body: {
          name: "Lucas",
          email: "lu@gmail.com",
          password: "123",
          date: "16/11/2020",
          time: "19:22",
          urlThumb: "",
          status: "",
          contacts: [],
        }
      },
      {
        message: "Para se Autenticar no sistema.",
        router: `[POST] ${baseUrl}/auth/authenticate`,
        body: {
          email: "lu@gmail.com",
          password: "123",
        }
      },
    ],
  });
});

app.listen(port, () => {
  console.log(`ServerON. ${host}${port}`);
});
