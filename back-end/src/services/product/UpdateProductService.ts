import prismaClient from "../../prisma";

interface OrderRequest {
  id: string;
  name: string;
  price: number;
  amount: number;
  description: string;
}

class UpdateProductService {
  async execute({ id, name, price, amount, description }: OrderRequest) {
    if (!name || !price || !amount || !description) {
      throw new Error("All fields is required!");
    }

    const noDataFound = await prismaClient.product.findUnique({
      where: {
        id: id
      }
    });
    
    if (!noDataFound) throw new Error("No data found!");

    const product = await prismaClient.product.update({
      where: {
        id: id
      },
      data: {
        name: name,
        price: price,
        amount: amount,
        description: description
      },
      select: {
        id: true,
        name: true,
        price: true,
        amount: true,
        description: true
      }
    });

    return product;
  }
}

export { UpdateProductService }