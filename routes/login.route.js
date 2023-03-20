//external import:
const express = require("express");
const { getLogin } = require("../controller/login.controller");
const decorateHtmlResponse = require("../middlewears/common/decorateHtmlResponse");

const Router = express.Router();

//login Routes:
Router.get("/", decorateHtmlResponse("Login"), getLogin);

module.exports = Router;
