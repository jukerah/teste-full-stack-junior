interface ProductRequest {
    id: string;
}
declare class FindProductByIdService {
    execute({ id }: ProductRequest): Promise<{
        name: string;
        price: number;
        amount: number;
        description: string;
    }>;
}
export { FindProductByIdService };
