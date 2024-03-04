import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpleadoDto } from './dto/create-empleado.dto';
import { UpdateEmpleadoDto } from './dto/update-empleado.dto';
import { Empleados } from './entities/empleado.entity';

@Injectable()
export class EmpleadosService {
  constructor(@InjectRepository(Empleados) private EmpleadosRepository: Repository<Empleados>){}

  createEmpleados(Empleados: CreateEmpleadoDto) {
    const newEmpleado = this.EmpleadosRepository.create(Empleados)
    return this.EmpleadosRepository.save(newEmpleado)
  }

  getEmpleados() {
    return this.EmpleadosRepository.find()
  }

  getEmpleado(id: number) {
    return this.EmpleadosRepository.findOne({
      where: {
        id,
      },
    });
  }

  updateEmpleado(id: number, Empleados: UpdateEmpleadoDto) {
    return this.EmpleadosRepository.update({id}, Empleados)
  }

  deleteEmpleado(id: number) {
    return this.EmpleadosRepository.delete({id})
  }
}
