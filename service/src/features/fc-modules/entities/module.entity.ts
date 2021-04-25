import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class ModuleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 500 })
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}