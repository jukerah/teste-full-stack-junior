import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService";

class CreateProductController {
 async handle(req: Request, res: Response) {
  const { name, price, amount, description } = req.body;
  const createProductService = new CreateProductService();

  if (!name) throw new Error("Name is required!");
  if (!price) throw new Error("Price is required!");
  if (!amount) throw new Error("Amount id is required!");
  if (!description) throw new Error("Description is required!");

  const product = await createProductService.execute({
    name,
    price,
    amount,
    description
  });

  return res.json(product);
 }
}

export { CreateProductController }