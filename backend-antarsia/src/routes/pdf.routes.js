const router = require('express').Router();
const auth = require("../middlewares/auth.middleweare");
const {
    generateMembersPDF,
  generateMemberPDF,
  generateAllMembersPDF
} = require("../controllers/pdf.controller")

router.get("/members", auth , generateAllMembersPDF); //kjo esh per te gjitha pdf
router.get("/member/:id", auth , generateMemberPDF) //kjo esh per 1 antar

module.exports = router;