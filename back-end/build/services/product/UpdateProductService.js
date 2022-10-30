"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class UpdateProductService {
    async execute({ id, name, price, amount, description }) {
        if (!name || !price || !amount || !description) {
            throw new Error("All fields is required!");
        }
        const noDataFound = await prisma_1.default.product.findUnique({
            where: {
                id: id
            }
        });
        if (!noDataFound)
            throw new Error("No data found!");
        const product = await prisma_1.default.product.update({
            where: {
                id: id
            },
            data: {
                name: name,
                price: price,
                amount: amount,
                description: description
            },
            select: {
                id: true,
                name: true,
                price: true,
                amount: true,
                description: true
            }
        });
        return product;
    }
}
exports.UpdateProductService = UpdateProductService;
