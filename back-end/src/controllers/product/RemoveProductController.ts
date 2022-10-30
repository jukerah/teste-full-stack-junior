import { Request, Response } from "express";

import { RemoveProductService } from "../../services/product/RemoveProductService";

class RemoveProductController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    if (!id) throw new Error("Product ID is required!");

    const removeProduct = new RemoveProductService();

    const product = await removeProduct.execute({ id });

    return res.json(product);
  }
}

export { RemoveProductController}