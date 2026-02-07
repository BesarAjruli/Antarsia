const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const {
  createMember,
  getMembers,
  getMemberById,
  updateMember,
  deleteMember,
} = require("../controllers/members.controller");

router.post("/", auth, createMember);
router.get("/", auth, getMembers);
router.get("/:id", auth, getMemberById);
router.put("/:id", auth, updateMember);
router.delete("/:id", auth, deleteMember);

module.exports = router;
