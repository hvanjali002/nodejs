var AWS = require("aws-sdk"),
  dyn = new AWS.DynamoDB({
    endpoint: new AWS.Endpoint("http://localhost:8000")
  });

dyn.listTables(function(err, data) {
  console.log("listTables", err, data);
});
