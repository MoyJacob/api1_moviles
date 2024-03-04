import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm'

@Entity()
export class Productos {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    precio: number

    @Column()
    categoria: string
}
