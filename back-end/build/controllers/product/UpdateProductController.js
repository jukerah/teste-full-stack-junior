"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
const UpdateProductService_1 = require("../../services/product/UpdateProductService");
class UpdateProductController {
    async handle(req, res) {
        const { id, name, price, amount, description } = req.body;
        const updateProduct = new UpdateProductService_1.UpdateProductService();
        const product = await updateProduct.execute({
            id,
            name,
            price,
            amount,
            description
        });
        return res.json(product);
    }
}
exports.UpdateProductController = UpdateProductController;
