// dependencies
let express = require("express");
let {
  handelCreateUser,
  handelGetUser,
  handelGetUserById,
  handelUpdateUserById,
  handelDeleteUserById,
} = require("../controllers/crud");

let router = express.Router();

router.route("/").post(handelCreateUser).get(handelGetUser);

router
  .route("/:id")
  .get(handelGetUserById)
  .patch(handelUpdateUserById)
  .delete(handelDeleteUserById);

// export
module.exports = router;
