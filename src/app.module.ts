import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CommunModule } from './commun/commun.module';

@Module({
  imports: [TodoModule, CommunModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
