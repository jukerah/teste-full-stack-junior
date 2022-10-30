import { Router, Request, Response } from 'express';

import { CreateProductController } from '../controllers/product/CreateProductController';
import { ProductListController } from '../controllers/product/ProductListController';
import { FindProductByIdController } from '../controllers/product/FindProductByIdController';
import { UpdateProductController } from '../controllers/product/UpdateProductController';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: "C.R.U.D. Produtos" });
});

router.post('/product', new CreateProductController().handle);
router.get('/product', new ProductListController().handle);
router.get('/product/detail', new FindProductByIdController().handle);
router.put('/product', new UpdateProductController().handle);
// router.delete('/product', new RemoveProductController().handle);

export { router };
