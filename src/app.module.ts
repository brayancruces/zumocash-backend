import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthController } from './auth/auth.controller';
import { SupabaseService } from './supabase/supabase.service';

@Module({
  imports: [],
  controllers: [AppController, AuthController],
  providers: [AppService, SupabaseService],
})
export class AppModule {}
