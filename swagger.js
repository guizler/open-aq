const YAML = require("yamljs");
const express = require("express");
const swaggerUi = require("swagger-ui-express");

const PORT = 3000;
const app = express();
const swaggerDocs = YAML.load("./swagger.yaml");

var defaultOption = {
  explorer: true,
};

app.use("/", swaggerUi.serve, swaggerUi.setup(swaggerDocs, defaultOption));

app.listen(PORT, () => console.log(`swagger running on port ${PORT}`));