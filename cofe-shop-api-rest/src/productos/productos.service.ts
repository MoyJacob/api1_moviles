import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Productos } from './entities/producto.entity';

@Injectable()
export class ProductosService {
  constructor(@InjectRepository(Productos) private ProductosRepository: Repository<Productos>){}

  createProductos(Productos: CreateProductoDto) {
    const newProducto = this.ProductosRepository.create(Productos)
    return this.ProductosRepository.save(newProducto)
  }

  getProductos() {
    return this.ProductosRepository.find()
  }

  getProducto(id: number) {
    return this.ProductosRepository.findOne({
      where: {
        id,
      },
    });
  }

  updateProducto(id: number, Productos: UpdateProductoDto) {
    return this.ProductosRepository.update({id}, Productos)
  }

  deleteProducto(id: number) {
    return this.ProductosRepository.delete({id})
  }
}
