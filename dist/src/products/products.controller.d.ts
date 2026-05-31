import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("./product.entity").Product[]>;
    findOne(id: number): Promise<import("./product.entity").Product>;
    create(body: {
        name: string;
        description?: string;
        price: number;
        stock?: number;
        categoryId?: number;
    }): Promise<import("./product.entity").Product[]>;
    update(id: number, body: any): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
