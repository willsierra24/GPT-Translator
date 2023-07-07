const { Router } = require("express");
const router = Router();

const getTranslation = require("../controllers/translationControllers.js")

router.post('/', getTranslation);
// router.post("/", postTranslation);


module.exports = router;
