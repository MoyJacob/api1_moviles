import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { clientes } from './entities/cliente.entity';

@Controller('clientes')
export class ClientesController {
  constructor(private readonly clientesService: ClientesService) {}

  @Post()
  createCliente(@Body() newCliente: CreateClienteDto) {
    this.clientesService.createCliente(newCliente)
  }

  //all clients
  @Get()
  getClientes(): Promise<clientes[]> {
    return this.clientesService.getClientes();
  }

  //One client
  //Sensibilidad a los espacios en id || Sensitivity to spaces in id
  @Get(':id')
  getCliente(@Param('id', ParseIntPipe) id: number): 
  Promise<clientes> {
    return this.clientesService.getCliente(id);
  }

  @Patch(':id')
  updateCliente(@Param('id', ParseIntPipe) id: number, @Body()
    clientes: UpdateClienteDto){
      return this.clientesService.updateCliente(id, clientes)
  }

  @Delete(':id')
  deleteClientes(@Param('id', ParseIntPipe) id: number) {

    return this.clientesService.deleteCliente(id);
  }
}
