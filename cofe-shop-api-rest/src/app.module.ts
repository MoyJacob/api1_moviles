//root/raíz proyecto
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientesModule } from './clientes/clientes.module';
//import { ConfigModule } from '@nestjs/config';ConfigModule.forRoot()
import {TypeOrmModule} from '@nestjs/typeorm';
import { EmpleadosModule } from './empleados/empleados.module';
import { ProductosModule } from './productos/productos.module';

@Module({
  
  imports: [
    TypeOrmModule.forRoot({
      type: 'mariadb',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'cafeteria',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true
    }),
    ClientesModule,
    EmpleadosModule,
    ProductosModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
