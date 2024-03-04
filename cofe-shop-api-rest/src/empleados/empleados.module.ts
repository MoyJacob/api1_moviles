import { Module } from '@nestjs/common';
import { EmpleadosService } from './empleados.service';
import { EmpleadosController } from './empleados.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { Empleados } from './entities/empleado.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Empleados])],
  controllers: [EmpleadosController],
  providers: [EmpleadosService],
})
export class EmpleadosModule {}
