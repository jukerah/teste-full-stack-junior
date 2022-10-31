"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    async execute({ name, price, amount, description }) {
        const product = await prisma_1.default.product.create({
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
exports.CreateProductService = CreateProductService;
