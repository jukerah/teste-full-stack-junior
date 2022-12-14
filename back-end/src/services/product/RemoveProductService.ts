import prismaClient from "../../prisma";

interface ProductRequest {
  id: string;
}

class RemoveProductService {
  async execute({ id }: ProductRequest) {
    const noDataFound = await prismaClient.product.findUnique({
      where: {
        id: id
      }
    });
    
    if (!noDataFound) throw new Error("No data found!");
    
    const removeProduct = await prismaClient.product.delete({
      where: {
        id: id
      }
    });

    return removeProduct;
  }
}

export { RemoveProductService }