import axios, { AxiosInstance } from "axios";

/* eslint-disable @typescript-eslint/no-explicit-any */
interface PaginationParams {
  page: number;
  itemsPerPage: number;
}

interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationParams;
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}
export interface IHttpHandler {
  list<T>(
    url: string,
    params?: PaginationParams,
  ): Promise<PaginatedResponse<T>>;
  get<T>(url: string): Promise<T>;
  post<T>(url: string, data: any): Promise<T>;
  put<T>(url: string, data: any): Promise<T>;
  delete<T>(url: string): Promise<T>;
}

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HttpHandler implements IHttpHandler {
  async list<T>(
    url: string,
    params?: PaginationParams,
  ): Promise<PaginatedResponse<T>> {
    const queryParams = new URLSearchParams();

    if (params?.page) {
      queryParams.append("page", String(params.page));
    }
    if (params?.itemsPerPage) {
      queryParams.append("itemsPerPage", String(params.itemsPerPage));
    }

    const queryString = queryParams.toString();
    const finalUrl = queryString ? `${url}?${queryString}` : url;

    const response = await axiosInstance.get<PaginatedResponse<T>>(finalUrl);
    return response.data;
  }
  async get<T>(url: string): Promise<T> {
    const response = await axiosInstance.get<T>(url);
    return response.data;
  }

  async post<T>(url: string, data: any): Promise<T> {
    const response = await axiosInstance.post<T>(url, data);
    return response.data;
  }

  async put<T>(url: string, data: any): Promise<T> {
    const response = await axiosInstance.put<T>(url, data);
    return response.data;
  }

  async delete<T>(url: string): Promise<T> {
    const response = await axiosInstance.delete<T>(url);
    return response.data;
  }
}
