"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../../services/product/CreateProductService");
class CreateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
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
            const product = yield createProductService.execute({
                name,
                price,
                amount,
                description
            });
            return res.json(product);
        });
    }
}
exports.CreateProductController = CreateProductController;
