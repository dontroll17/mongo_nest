import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: any
    ) {}

    private async findProduct(id: string): Promise<any> {
        let product: Promise<any>;
        try {
            product = await this.productModel.findById(id).exec();
        } catch (e) {
            throw e;
        }

        if(!product) {
            throw new NotFoundException(`id not found`);
        }

        return product;
    }

    async createProduct(name: string, description: string, price: number) {
        const createProd = new this.productModel({
            name,
            description,
            price
        });
        return await createProd.save();
    }

    async getProducts() {
        return await this.productModel.find().exec();
    }

    async getProductById(id: string) {
        return await this.findProduct(id);
    }
}
