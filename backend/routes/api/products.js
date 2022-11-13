const express = require("express");
const productController = require("../../controllers/productController");
const router = express.Router();

router.route("/seed").post(productController.seedProducts);
router.route("/").post(productController.createOneProduct);
router.route("/").get(productController.getAllProducts);
router.route("/:category").get(productController.getProducts);
router.route("/:category/:id").get(productController.getOneProduct);
router.route("/search/:searchTerm").get(productController.searchProducts);
router.route("/:category/:id").put(productController.updateProduct);
router.route("/:id").delete(productController.deleteProduct);


module.exports = router;
