import { IHttpHandler } from "@/lib/HttpHandler";
import {
  CreateExampleDTO,
  CreateExampleResponse,
  DeleteExampleResponse,
  ListResponse,
  PaginatedResponse,
  PaginationParams,
  RetrieveExampleResponse,
  UpdateExampleDTO,
  UpdateExampleResponse,
} from "./dto";

export async function createExample(
  handler: IHttpHandler,
  data: CreateExampleDTO,
) {
  return handler.post<CreateExampleResponse>("/example", data);
}

export async function updateExample(
  handler: IHttpHandler,
  data: UpdateExampleDTO,
) {
  return handler.put<UpdateExampleResponse>(`/example/${data.id}`, data);
}

export async function listExample(
  handler: IHttpHandler,
  query: PaginationParams,
) {
  return handler.list<PaginatedResponse<ListResponse>>(
    `/example?page=${query.page}&itemsPerPage=${query.itemsPerPage}`,
    {
      page: query.page,
      itemsPerPage: query.itemsPerPage,
    },
  );
}

export async function retrieveExample(handler: IHttpHandler, id: string) {
  return handler.get<RetrieveExampleResponse>(`/example/${id}`);
}

export async function deleteExample(handler: IHttpHandler, id: string) {
  return handler.delete<DeleteExampleResponse>(`/example/${id}`);
}
