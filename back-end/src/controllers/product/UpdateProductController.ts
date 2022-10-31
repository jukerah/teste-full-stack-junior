import { Request, Response } from "express";

import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id, name, price, amount, description } = req.body;

    const updateProduct = new UpdateProductService();

    if (!name) throw new Error("Name is required!");
    if (!description) throw new Error("Description is required!");

    const priceProduct: number = !price ? 0 : price;
    const amountProduct: number = !amount ? 0 : amount;

    const product = await updateProduct.execute({
      id: id,
      name: name,
      price: priceProduct,
      amount: amountProduct,
      description: description
    });

    return res.json(product);
  }
}

export { UpdateProductController }