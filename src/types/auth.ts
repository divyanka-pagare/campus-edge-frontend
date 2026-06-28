export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    batchYear: number;
    branch: string;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface AuthResponse {
    token: string;
    name: string;
    email: string;
    role: string;
  }
  
  export interface ApiError {
    error?: string;
    [field: string]: string | undefined;
  }