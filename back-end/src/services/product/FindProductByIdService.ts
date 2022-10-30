import prismaClient from "../../prisma";

interface ProductRequest {
  id: string;
}

class FindProductByIdService {
  async execute({ id }: ProductRequest) {
    if (!id) {
      throw new Error("Product ID is required!");
    }
    
    const findProductById = await prismaClient.product.findUnique({
      where: {
        id: id
      },
      select: {
        name: true,
        price: true,
        amount: true,
        description: true
      }
    });

    return findProductById;
  }
}

export { FindProductByIdService }