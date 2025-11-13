export interface CreateExampleDTO {
  id: string;
}

export interface CreateExampleResponse {
  id: string;
}

export interface RetrieveExampleResponse {
  id: string;
}

export interface UpdateExampleDTO {
  id: string;
}

export interface UpdateExampleResponse {
  id: string;
}

export interface DeleteExampleResponse {
  id: string;
}
export interface PaginationParams {
  page: number;
  itemsPerPage: number;
  totalItems?: number;
  totalPages?: number;
  currentPage?: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationParams;
}

export interface ListResponse {
  id: string;
}
