import { Product, ProductSchema } from './schemas/product.schema';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports: [MongooseModule.forFeature([
        {name: Product.name, schema: ProductSchema}
    ])],
    providers: [ProductsService],
    controllers: [ProductsController]
})
export class ProductsModule {
}
