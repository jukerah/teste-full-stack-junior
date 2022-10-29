import prismaClient from "../../prisma";

class ProductListService {
  async execute() {
    const productList = await prismaClient.product.findMany({
      orderBy: {
        created_at: 'desc'
      }
    });

    return productList;
  }
}

export { ProductListService }