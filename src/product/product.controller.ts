import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductService) {}

    @Get()
    async getAllProduct() {
        return await this.productsService.getProducts();
    }

    @Get(':id')
    async getProduct(@Param('id') id: string) {
        return await this.productsService.getProductById(id);
    }

    @Post()
    async addProduct(
        @Body('name') name: string,
        @Body('description') description: string,
        @Body('price') price: number
    ) {
        const genProd = await this.productsService.createProduct(
            name,
            description,
            price
        );
        return genProd; 
    }
}
