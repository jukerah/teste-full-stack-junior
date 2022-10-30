"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveProductController = void 0;
const RemoveProductService_1 = require("../../services/product/RemoveProductService");
class RemoveProductController {
    async handle(req, res) {
        const { id } = req.body;
        if (!id)
            throw new Error("Product ID is required!");
        const removeProduct = new RemoveProductService_1.RemoveProductService();
        const product = await removeProduct.execute({ id });
        return res.json(product);
    }
}
exports.RemoveProductController = RemoveProductController;
