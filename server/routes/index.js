const router = require("express").Router();
const Controller = require("../controllers");
const errorHandler = require("../middlewares/errorHandler");

router.post("/register", Controller.register);
router.post("/login", Controller.login);
router.get("/digimon", Controller.fetchDigimons);
router.get("/digimon/:name", Controller.fetchSearchedDigimon)
router.post("/create-user", Controller.createUserGlobalStats)
router.post("/leaderboards", Controller.displayLeaderboard)
router.use(errorHandler);

module.exports = router
