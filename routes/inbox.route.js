//external import:
const express = require("express");
const { getInbox } = require("../controller/inbox.controller");
const decorateHtmlResponse = require("../middlewears/common/decorateHtmlResponse");

const Router = express.Router();

//login Routes:
Router.get("/", decorateHtmlResponse("Inbox"), getInbox);

module.exports = Router;
