import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
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
    async addProduct(@Body() createProductDto: CreateProductDto) {
        return await this.productsService.createProduct(createProductDto);
    }

    @Patch(':id')
    async updateProduct(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto
    ) {
        return await this.productsService.updateProduct(id, updateProductDto);
    }

    @Delete(':id')
    async removeProduct(@Param('id') id: string) {
        return await this.productsService.removeProduct(id);
    }
}
