const router = require("express").Router();
const {register , login, getUser} = require("../controllers/auth.controller");

router.post("/register", register);
router.post("/login", login);
router.get("/user", getUser)

module.exports = router;
