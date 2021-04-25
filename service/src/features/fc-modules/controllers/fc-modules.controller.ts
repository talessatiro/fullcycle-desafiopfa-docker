import { Controller, Get } from '@nestjs/common';
import { ModuleDTO } from '../dtos/module.dto';
import { FcModulesService } from '../services/fc-modules.service';

@Controller('modules')
export class FcModulesController {

    constructor(private readonly fcModulesService: FcModulesService) { }

    @Get()
    list(): Promise<ModuleDTO[]> {
        return this.fcModulesService.list();
    }
}
