//keep export for controllers, well I understand is good :)
import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class clientes {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellidos: string

    @Column()
    telefono: number

    @Column()
    direccion: string
}
