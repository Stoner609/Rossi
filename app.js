const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const mongoose = require("mongoose");

const graphQlSchema = require("./graphql/schema/index");
const graphQlResolvers = require("./graphql/resolvers/index");
const isAuth = require("./middleware/is-auth");

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.use(isAuth);

app.use(
  "/graphql",
  graphqlHttp({
    schema: graphQlSchema,
    rootValue: graphQlResolvers,
    graphiql: true
  })
);

mongoose
  .connect(
`mongodb://stoner:GfRN9kCX7u10yTLh@cluster0-shard-00-00-2vnhb.mongodb.net:27017,cluster0-shard-00-01-2vnhb.mongodb.net:27017,cluster0-shard-00-02-2vnhb.mongodb.net:27017/events-react-dev?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`
    // `mongodb+srv://${process.env.MONGO_USER}:${
    //   process.env.MONGO_PASSWORD
    // }@cluster0-2vnhb.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`
  )
  .then(() => {
    app.listen(8000);
  })
  .catch(err => {
    console.log(err);
  });
