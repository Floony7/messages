import { readFile, writeFile } from 'fs/promises';
import { CreateMessageDto } from './dtos/create-message.dto';
import { Injectable } from '@nestjs/common';
@Injectable()
export class MessagesRepository {
    async findOne(id: string) {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        return messages[id];
      }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);
    
        return messages;
      }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);
        messages[id] = { id, content };

        writeFile('messages.json', JSON.stringify(messages));
    }
}