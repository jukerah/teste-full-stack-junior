"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductController = void 0;
const UpdateProductService_1 = require("../../services/product/UpdateProductService");
class UpdateProductController {
    async handle(req, res) {
        const { id, name, price, amount, description } = req.body;
        const updateProduct = new UpdateProductService_1.UpdateProductService();
        if (!name)
            throw new Error("Name is required!");
        if (!description)
            throw new Error("Description is required!");
        const priceProduct = !price ? 0 : price;
        const amountProduct = !amount ? 0 : amount;
        const product = await updateProduct.execute({
            id: id,
            name: name,
            price: priceProduct,
            amount: amountProduct,
            description: description
        });
        return res.json(product);
    }
}
exports.UpdateProductController = UpdateProductController;
