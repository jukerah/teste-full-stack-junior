"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductByIdController = void 0;
const FindProductByIdService_1 = require("../../services/product/FindProductByIdService");
class FindProductByIdController {
    async handle(req, res) {
        const { id } = req.body;
        if (!id)
            throw new Error("Product ID is required!");
        const findProductById = new FindProductByIdService_1.FindProductByIdService();
        const product = await findProductById.execute({ id });
        return res.json(product);
    }
}
exports.FindProductByIdController = FindProductByIdController;
