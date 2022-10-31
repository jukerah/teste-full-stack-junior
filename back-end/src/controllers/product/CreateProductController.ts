import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
 async handle(req: Request, res: Response) {
  const { name, price, amount, description } = req.body;
  const createProductService = new CreateProductService();

  if (!name) throw new Error("Name is required!");
  if (!description) throw new Error("Description is required!");

  const priceProduct: number = !price ? 0 : price;
  const amountProduct: number = !amount ? 0 : amount;

  const product = await createProductService.execute({
    name: name,
    price: priceProduct,
    amount: amountProduct,
    description: description
  });

  return res.json(product);
 }
}

export { CreateProductController }