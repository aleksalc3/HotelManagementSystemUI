import { User } from '../types/user';
import { Token } from '../types/token';
import axios from 'axios';
import config from "../config";

export async function login(user: User): Promise<Token> {
    try {
      const response = await axios.post<Token>(
        `${config.baseApiUrl}/Auth/login`,
        user,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
  
      return response.data;
    } catch (error) {
      // Handle error here, e.g., by throwing a custom error or logging it
      throw new Error('Login failed');
    }
  }






