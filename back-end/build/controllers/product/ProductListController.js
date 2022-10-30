"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListController = void 0;
const ProductListService_1 = require("../../services/product/ProductListService");
class ProductListController {
    async handle(req, res) {
        const listProductService = new ProductListService_1.ProductListService();
        const productList = await listProductService.execute();
        return res.json(productList);
    }
}
exports.ProductListController = ProductListController;
