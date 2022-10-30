declare class ProductListService {
    execute(): Promise<import(".prisma/client").Product[]>;
}
export { ProductListService };
