import { Request, Response } from "express";

import { FindProductByIdService } from "../../services/product/FindProductByIdService";

class FindProductByIdController {
  async handle(req: Request, res: Response) {
    const { id } = req.body;

    if (!id) throw new Error("Product ID is required!");

    const findProductById = new FindProductByIdService();

    const product = await findProductById.execute({ id });

    return res.json(product);
  }
}

export { FindProductByIdController }