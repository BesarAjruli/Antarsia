const router = require("express").Router();
const {register , login, getUser} = require("../controllers/auth.controller");
const authMiddleware = require('../middlewares/auth.middleweare')

router.post("/register", register);
router.post("/login", login);
router.get("/user",authMiddleware, getUser)

module.exports = router;
