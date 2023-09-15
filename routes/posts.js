const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);
router.post("/createPost", upload.single("file"), postsController.createPost);
router.delete("/deletePost/:id", postsController.deletePost);
router.post("/sendMessage", postsController.sendMessage);
router.delete("/deleteMessage/:id", postsController.deleteMessage);

module.exports = router;
