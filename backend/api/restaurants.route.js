import express from "express"
import restaurantsCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route("/").get(restaurantsCtrl.apiGetRestaurants)

// adding routes to add/delete/edit
router
    .route("/review")
    .post(ReviewsCtrl.apiPostReview)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReview)


export default router
