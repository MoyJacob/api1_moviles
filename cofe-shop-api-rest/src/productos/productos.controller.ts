import { Controller, Get, Post, Body, Patch, Param, Delete,  ParseIntPipe } from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Productos } from './entities/producto.entity';

@Controller('productos')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Post()
  createProductos(@Body() newProducto: CreateProductoDto) {
    this.productosService.createProductos(newProducto)
  }

  @Get()
  getProductos(): Promise<Productos[]> {
    return this.productosService.getProductos();
  }

  @Get(':id')
  getProducto(@Param('id', ParseIntPipe) id: number): 
  Promise<Productos> {
    return this.productosService.getProducto(id);
  }

  @Patch(':id')
  updateProducto(@Param('id', ParseIntPipe) id: number, @Body()
    Productos: UpdateProductoDto){
      return this.productosService.updateProducto(id, Productos)
  }

  @Delete(':id')
  deleteProducto(@Param('id', ParseIntPipe) id: number) {

    return this.productosService.deleteProducto(id);
  }
}
