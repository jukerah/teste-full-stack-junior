import { Request, Response } from "express";

import { ProductListService } from "../../services/product/ProductListService";

class ProductListController {
  async handle(req: Request, res: Response) {
    const listProductService = new ProductListService();

    const productList = await listProductService.execute();

    return res.json(productList);
  }
}

export { ProductListController }