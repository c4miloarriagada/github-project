const { Router } = require("express");
const {
  firstLoad,
  updateRepos,
  getReposData,
  getOwner,
} = require("../controllers/api");
const { authenticator, validation } = require("../middleware/authenticator");

const router = Router();

router.post("/", [authenticator, validation], firstLoad);

router.put("/update", [authenticator, validation], updateRepos);

router.get("/", [authenticator, validation], getReposData);

router.get("/user", [authenticator, validation], getOwner);

module.exports = router;
