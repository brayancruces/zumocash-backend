import { Controller, Post, Body } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service'


@Controller('auth')
export class AuthController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post('register')
  async register(@Body() request: any) {
    const { email, password } = request;
    const { data, error }  = await this.supabaseService.getSupabaseClient().auth.signUp({
      email,
      password,
    });
    if (error) {
      // error
    } else {
      // done
      return data;
    }
  }

  @Post('login')
  async login(@Body() request: any) {
    const { email, password } = request;
    const { data, error } = await this.supabaseService.getSupabaseClient().auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      // error
    } else {
      // done
      return { data };
    }
  }
}
