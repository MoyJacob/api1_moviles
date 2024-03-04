import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Empleados {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    apellidos: string

    @Column()
    salario: number

    @Column()
    puesto: string
}
