"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductListService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class ProductListService {
    async execute() {
        const productList = await prisma_1.default.product.findMany({
            orderBy: {
                created_at: 'desc'
            }
        });
        return productList;
    }
}
exports.ProductListService = ProductListService;
