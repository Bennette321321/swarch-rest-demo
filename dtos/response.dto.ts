export interface APIResponse<T> {
  success: boolean;
  length?: number;
  data: T | null;
  error: string | null;
}
