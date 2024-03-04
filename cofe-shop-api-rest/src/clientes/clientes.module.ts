import { Module } from '@nestjs/common';
import { ClientesService } from './clientes.service';
import { ClientesController } from './clientes.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import { clientes } from './entities/cliente.entity';

@Module({
  imports: [TypeOrmModule.forFeature([clientes])],
  controllers: [ClientesController],
  providers: [ClientesService],
})
export class ClientesModule {}
