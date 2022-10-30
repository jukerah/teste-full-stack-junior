"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
class CreateProductController {
    async handle(req, res) {
        const { name, price, amount, description } = req.body;
        const createProductService = new CreateProductService_1.CreateProductService();
        if (!name)
            throw new Error("Name is required!");
        if (!price)
            throw new Error("Price is required!");
        if (!amount)
            throw new Error("Amount id is required!");
        if (!description)
            throw new Error("Description is required!");
        const product = await createProductService.execute({
            name,
            price,
            amount,
            description
        });
        return res.json(product);
    }
}
exports.CreateProductController = CreateProductController;
