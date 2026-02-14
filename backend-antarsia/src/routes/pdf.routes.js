const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const {
  generateAllMembersPDF,
  generateMemberPDF
} = require("../controllers/pdf.controller");

router.get("/members/:id", auth, generateMemberPDF);
router.get("/members", auth, generateAllMembersPDF);

module.exports = router;
