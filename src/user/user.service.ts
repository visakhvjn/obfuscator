import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService 
{
    async hello()
    {
        return "Hello World Common!";
    }

    async bye()
    {
        return "See you soon!";
    }
}
