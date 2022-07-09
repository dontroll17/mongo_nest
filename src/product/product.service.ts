import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDocument, Product } from './product.model';

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<ProductDocument>
    ) {}

    async createProduct(createProductDto: CreateProductDto): Promise<Product> {
        const createProd = new this.productModel({
            ...createProductDto
        });
        return await createProd.save();
    }

    async updateProduct(id: string, updateProductDto: UpdateProductDto): Promise<Product> {
        return await this.productModel.findByIdAndUpdate(id, updateProductDto).exec();
    }

    async removeProduct(id: string): Promise<Product> {
        return await this.productModel.findByIdAndDelete(id).exec();
    }

    async getProducts(): Promise<Product[]> {
        return await this.productModel.find().exec();
    }

    async getProductById(id: string): Promise<Product> {
        return await this.productModel.findById(id).exec();
    }
}
