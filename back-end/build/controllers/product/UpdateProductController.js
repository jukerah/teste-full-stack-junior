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
exports.UpdateProductController = void 0;
const UpdateProductService_1 = require("../../services/product/UpdateProductService");
class UpdateProductController {
    handle(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, name, price, amount, description } = req.body;
            const updateProduct = new UpdateProductService_1.UpdateProductService();
            const product = yield updateProduct.execute({
                id,
                name,
                price,
                amount,
                description
            });
            return res.json(product);
        });
    }
}
exports.UpdateProductController = UpdateProductController;
