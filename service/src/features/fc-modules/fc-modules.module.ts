import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { FcModulesController } from './controllers/fc-modules.controller';
import { fcModuleProviders } from './providers/module.provider';
import { FcModulesService } from './services/fc-modules.service';

@Module({
  controllers: [FcModulesController],
  providers: [...fcModuleProviders, FcModulesService],
  imports: [DatabaseModule]
})
export class FcModulesModule { }
