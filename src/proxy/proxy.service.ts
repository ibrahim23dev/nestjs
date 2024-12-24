import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ProxyService {
  private readonly laravelApiUrl = 'http://localhost:8000/api/users';

  constructor(private readonly httpService: HttpService) {}

  async getUsers(): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.get(this.laravelApiUrl),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error fetching users',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async createUser(userData: any): Promise<any> {
    try {
      const response = await lastValueFrom(
        this.httpService.post(this.laravelApiUrl, userData),
      );
      return response.data;
    } catch (error) {
      throw new HttpException(
        error.response?.data || 'Error creating user',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
