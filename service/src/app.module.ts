import { Module } from '@nestjs/common';
import { FcModulesModule } from './features/fc-modules/fc-modules.module';

@Module({
    imports: [FcModulesModule],
    controllers: [],
    providers: [],
})
export class AppModule { }
