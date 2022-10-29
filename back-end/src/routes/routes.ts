import { Router, Request, Response } from 'express';

import { CreateProductController } from '../controllers/product/CreateProductController';

const router = Router();

router.get('/teste', (req: Request, res: Response) => {
  return res.json({ nome: "C.R.U.D. Produtos" });
});

router.post('/product', new CreateProductController().handle);
// router.get('/product', new ListProductController().handle);
// router.get('/product/detail', new ProductDetailController().handle);
// router.put('/product', new UpdateProductController().handle);
// router.delete('/product', new RemoveProductController().handle);

export { router };
