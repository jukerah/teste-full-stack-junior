interface ProductRequest {
    name: string;
    price: number;
    amount: number;
    description: string;
}
declare class CreateProductService {
    execute({ name, price, amount, description }: ProductRequest): Promise<{
        name: string;
        price: number;
        amount: number;
        description: string;
        id: string;
    }>;
}
export { CreateProductService };
