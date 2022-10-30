"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const CreateProductController_1 = require("../controllers/product/CreateProductController");
const ProductListController_1 = require("../controllers/product/ProductListController");
const FindProductByIdController_1 = require("../controllers/product/FindProductByIdController");
const UpdateProductController_1 = require("../controllers/product/UpdateProductController");
const RemoveProductController_1 = require("../controllers/product/RemoveProductController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/teste', (req, res) => {
    return res.json({ nome: "C.R.U.D. Produtos" });
});
router.post('/product', new CreateProductController_1.CreateProductController().handle);
router.get('/product', new ProductListController_1.ProductListController().handle);
router.get('/product/detail', new FindProductByIdController_1.FindProductByIdController().handle);
router.put('/product', new UpdateProductController_1.UpdateProductController().handle);
router.delete('/product', new RemoveProductController_1.RemoveProductController().handle);
