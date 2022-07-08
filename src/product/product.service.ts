import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './interface/product.interface';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: any
    ) {}

    async createProduct(name: string, description: string, price: number) {
        const prod = new this.productModel({
            name,
            description,
            price
        });
        const res = await prod.save();
        return res;
    }
}
