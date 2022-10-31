"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindProductByIdService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class FindProductByIdService {
    async execute({ id }) {
        const noDataFound = await prisma_1.default.product.findUnique({
            where: {
                id: id
            }
        });
        if (!noDataFound)
            throw new Error("No data found!");
        const findProductById = await prisma_1.default.product.findUnique({
            where: {
                id: id
            },
            select: {
                name: true,
                price: true,
                amount: true,
                description: true
            }
        });
        return findProductById;
    }
}
exports.FindProductByIdService = FindProductByIdService;
