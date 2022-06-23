import { Controller, Get, Param } from '@nestjs/common';
import { Message } from '@interview-problems/api-interfaces';
import { wait } from './utils/wait';

@Controller()
export class AppController {
  @Get(':id')
  async getData(@Param('id') id: string): Promise<Message> {
    await wait(+id * 1000);

    return {
      message: `Message foo ${id}`,
    };
  }
}
