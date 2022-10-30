interface ProductRequest {
    id: string;
}
declare class RemoveProductService {
    execute({ id }: ProductRequest): Promise<import(".prisma/client").Product>;
}
export { RemoveProductService };
