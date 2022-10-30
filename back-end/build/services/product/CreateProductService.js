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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../../prisma"));
class CreateProductService {
    execute({ name, price, amount, description }) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!name || !price || !amount || !description) {
                throw new Error("All fields is required!");
            }
            const product = yield prisma_1.default.product.create({
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
        });
    }
}
exports.CreateProductService = CreateProductService;
