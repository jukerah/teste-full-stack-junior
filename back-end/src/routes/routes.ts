import { Router } from 'express';

import { CreateProductController } from '../controllers/product/CreateProductController';
import { ProductListController } from '../controllers/product/ProductListController';
import { UpdateProductController } from '../controllers/product/UpdateProductController';
import { RemoveProductController } from '../controllers/product/RemoveProductController';

const router = Router();

router.post('/product', new CreateProductController().handle);
router.get('/product', new ProductListController().handle);
router.put('/product', new UpdateProductController().handle);
router.delete('/product', new RemoveProductController().handle);

export { router };
