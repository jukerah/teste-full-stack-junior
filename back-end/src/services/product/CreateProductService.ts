import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  price: number;
  amount: number;
  description: string;
}

class CreateProductService {
  async execute({ name, price, amount, description }: ProductRequest) {
    const product = await prismaClient.product.create({
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

export { CreateProductService }