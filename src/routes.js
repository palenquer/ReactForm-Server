const { Router } = require("express");
const  user  = require("./models/user");

const routes = Router();

routes.post("/users", (request, response) => {
  const { name, lastname, cpf, sale } = request.body;
  user.create({
    name,
    lastname,
    cpf,
    sale,
  });
  return response.json(request.body.name);
});

module.exports = routes;
