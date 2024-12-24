import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ProxyService } from './proxy.service';
import { ProxyController } from './proxy.controller';

@Module({
  imports: [HttpModule],
  controllers: [ProxyController],  // Make sure this is here
  providers: [ProxyService],  // And this as well
})
export class AppModule {}
