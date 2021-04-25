import { Connection } from 'typeorm';
import { DATABASE_CONNECTION, MODULE_REPOSITORY } from '../../../configuration/constants';
import { ModuleEntity } from '../entities/module.entity';

export const fcModuleProviders = [
    {
        provide: MODULE_REPOSITORY,
        useFactory: (connection: Connection) => connection.getRepository(ModuleEntity),
        inject: [DATABASE_CONNECTION],
    },
];