import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MODULE_REPOSITORY } from '../../../configuration/constants';
import { ModuleDTO } from '../dtos/module.dto';
import { ModuleEntity } from '../entities/module.entity';

@Injectable()
export class FcModulesService implements OnModuleInit {

    constructor(
        @Inject(MODULE_REPOSITORY)
        private readonly modulesRepository: Repository<ModuleEntity>) { }

    async list(): Promise<ModuleDTO[]> {
        const modulesDTO: ModuleDTO[] = [];
        const modules = await this.modulesRepository.find();

        if (modules) {
            modules.forEach((module: ModuleEntity) => {
                modulesDTO.push(new ModuleDTO(module.name));
            });
        }

        return modulesDTO;
    }

    /**
     * Preenche a table de modules (Somente para facilitar a implementação do desafio).
     */
    async onModuleInit() {
        const entities: ModuleEntity[] = [];
        const modules = await this.modulesRepository.find();

        if (modules && !modules.length) {
            entities.push(new ModuleEntity('Docker'))
            entities.push(new ModuleEntity('Fundamentos de Arquitetura de Software'))
            entities.push(new ModuleEntity('Comunicação'))
            entities.push(new ModuleEntity('RabbitMQ'))
            entities.push(new ModuleEntity('Autenticação e Keycloak'))
            entities.push(new ModuleEntity('Domain Driven Design e Arquitetura hexagonal'))
            entities.push(new ModuleEntity('Arquitetura do projeto prático - Codeflix'))
            entities.push(new ModuleEntity('Microsserviço: Catálogo de vídeos com Laravel ( Back-end )'))
            entities.push(new ModuleEntity('Microsserviço: Catálogo de vídeos com React ( Front-end )'))
            entities.push(new ModuleEntity('Microsserviço de Encoder de Vídeo com Go Lang'))

            await this.modulesRepository.save(entities);
        }
    }
}
