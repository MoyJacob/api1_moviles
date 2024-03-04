//connection db
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { clientes } from './entities/cliente.entity';

@Injectable()
export class ClientesService {
  constructor(@InjectRepository(clientes) private ClientesRepository: Repository<clientes>){}

  //Asynchro function, post
  createCliente(cliente: CreateClienteDto) {
    const newCliente = this.ClientesRepository.create(cliente)
    return this.ClientesRepository.save(newCliente)
  }

  //get all clients 
  getClientes() {
    return this.ClientesRepository.find()
  }

  //get one client by id
  getCliente(id: number) {
    return this.ClientesRepository.findOne({
      where: {
        id,
      },
    });
  }

  //update
  updateCliente(id: number, clientes: UpdateClienteDto) {
    return this.ClientesRepository.update({id}, clientes)
  }
  //delete
  deleteCliente(id: number) {
    return this.ClientesRepository.delete({id})
  }
}
