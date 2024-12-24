import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
//import { ProxyModule } from './proxy/proxy.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ibrahim2025:ibrahim2025@cluster0.xtjwx.mongodb.net/Blog'), // Replace with your MongoDB URI
    BlogModule,
    //ProxyModule,
  ],
})
export class AppModule {}
