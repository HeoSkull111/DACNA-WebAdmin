export type HttpResponse<T> = {
  data: T;
  error: any;
  message: string;
  status: number;
};
