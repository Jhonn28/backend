
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('paciente')
export class User {
    
    @PrimaryGeneratedColumn()
    ide_paciente: number;

    @Column({type: 'varchar', length: 20, nullable: false})
    nombre: string;

    @Column({type: 'varchar', length: 20, nullable: false})
    apellido: string;

    @Column({type: 'double precision', nullable: false})
    cedula: number;
    
    @Column({type: 'varchar', length: 5, nullable: false})
    tipo_sangre: string;

    @Column({type: 'double precision', nullable: false})
    colesterol: number;

    @Column({type: 'double precision', nullable: false})
    glucosa: number;

    @Column({type: 'double precision', nullable: false})
    presion_arterial: number;

}

