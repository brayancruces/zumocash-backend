import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { SupabaseService } from '../supabase/supabase.service'
import { AuthError } from '../common/custom-error.interface';


@Controller('auth')
export class AuthController {
  constructor(private readonly supabaseService: SupabaseService) {}

  @Post('register')
  async register(@Body() request: any) {
    const { email, password } = request;

    try {
        const { data, error }  = await this.supabaseService.getSupabaseClient().auth.signUp({
            email,
            password,
        });
        
        if (error) {
          throw new AuthError(error.code, error.message);
        } else {
            return { data };
        }
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }


  }

  @Post('login')
  async login(@Body() request: any) {
    console.log(request)
    const { email, password } = request; 

    try {
        const { data, error } = await this.supabaseService.getSupabaseClient().auth.signInWithPassword({
            email,
            password,
          });
        
        if (error) {
          throw new AuthError(error.code, error.message);
        } else {
            return { data };
        }
      } catch (error) {
        throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
      }

  }
}
