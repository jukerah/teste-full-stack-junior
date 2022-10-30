interface OrderRequest {
    id: string;
    name: string;
    price: number;
    amount: number;
    description: string;
}
declare class UpdateProductService {
    execute({ id, name, price, amount, description }: OrderRequest): Promise<{
        name: string;
        price: number;
        amount: number;
        description: string;
        id: string;
    }>;
}
export { UpdateProductService };
