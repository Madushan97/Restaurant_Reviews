import express from "express"
import restaurantsCtrl from "./restaurants.controller.js"

const router = express.Router()

router.route("/").get(restaurantsCtrl.apiGetRestaurants)

export default router
