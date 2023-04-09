import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { CommunModule } from './commun/commun.module'; 
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TodoModule, CommunModule,
        TypeOrmModule.forRoot({
          type:    'mysql',
          host: 'localhost',//process.env.DB_HOST,
          port: 3306,//parseInt(process.env.DB_PORT),
          username: 'root',//process.env.DB_USERNAME,
          password: "",//process.env.DB_PASSWORD,
          database: "tpnest",//process.env.DB_NAME,
          //entities: [], remplacer par autoloadentities
          synchronize: true,
          autoLoadEntities:true,
          logging:true,
        
      
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
