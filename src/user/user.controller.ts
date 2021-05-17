import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController
{
    constructor (private readonly UserService: UserService) {}

    @Get("hello")
    async hello()
    {
        return await this.UserService.hello();
    }

    @Get("bye")
    async bye()
    {
        return await this.UserService.bye();
    }
}
