import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe} from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleados } from './entities/empleado.entity';

@Controller('empleados')
export class EmpleadosController {
  constructor(private readonly empleadosService: EmpleadosService) {}

  @Post()
  createEmpleados(@Body() newEmpleado: CreateEmpleadoDto) {
    this.empleadosService.createEmpleados(newEmpleado)
  }

  @Get()
  getEmpleados(): Promise<Empleados[]> {
    return this.empleadosService.getEmpleados();
  }

  @Get(':id')
  getEmpleado(@Param('id', ParseIntPipe) id: number): 
  Promise<Empleados> {
    return this.empleadosService.getEmpleado(id);
  }

  @Patch(':id')
  updateEmpleado(@Param('id', ParseIntPipe) id: number, @Body()
    Empleados: UpdateEmpleadoDto){
      return this.empleadosService.updateEmpleado(id, Empleados)
  }

  @Delete(':id')
  deleteEmpleado(@Param('id', ParseIntPipe) id: number) {

    return this.empleadosService.deleteEmpleado(id);
  }
}
