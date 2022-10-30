import { Request, Response } from "express";

import { UpdateProductService } from "../../services/product/UpdateProductService";

class UpdateProductController {
  async handle(req: Request, res: Response) {
    const { id, name, price, amount, description } = req.body;

    const updateProduct = new UpdateProductService();

    const product = await updateProduct.execute({
      id,
      name,
      price,
      amount,
      description
    });

    return res.json(product);
  }
}

export { UpdateProductController }