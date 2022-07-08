import { Body, Controller, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
    constructor(private readonly productsService: ProductService) {}

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
