export interface StrapiErrorResponse {
  error?: {
    statusCode: number;
    error: string;
    message: string;
  };
}