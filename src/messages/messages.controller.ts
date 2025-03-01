import { Controller, Get, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessage() {
        return "You got mail"
    }
    @Post()
    createMessage() {

    }
    @Get('/:id')
    getMessage() {

    }
}
