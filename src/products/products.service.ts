import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private productsRepository: Repository<Product>,
  ) {}

  findAll() {
    return this.productsRepository.find();
  }

  findOne(id: number) {
    return this.productsRepository.findOne({ where: { id } });
  }

  create(productData: any) {
    const product = this.productsRepository.create(productData);
    return this.productsRepository.save(product);
  }

  update(id: number, productData: any) {
    return this.productsRepository.update(id, productData);
  }

  remove(id: number) {
    return this.productsRepository.delete(id);
  }
}
