import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogController } from './blog.controller';
import { BlogService } from './blog.service';
import { Blog, BlogSchema } from './schemas/blog.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Blog.name, schema: BlogSchema }]), // MongoDB Schema যুক্ত করা
  ],
  controllers: [BlogController], // Controller যুক্ত করা
  providers: [BlogService], // Service যুক্ত করা
})
export class BlogModule {}
