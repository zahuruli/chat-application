//external import:
const express = require("express");
const { getUser } = require("../controller/users.controller");
const decorateHtmlResponse = require("../middlewears/common/decorateHtmlResponse");

const Router = express.Router();

//user Routes:
Router.get("/", decorateHtmlResponse("Users"), getUser);

module.exports = Router;
