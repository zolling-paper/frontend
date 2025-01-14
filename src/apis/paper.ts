import { PostPaperRequest, PostPaperResponse, GetPaperRequestParam, GetPaperResponse } from "@/types/services";
import { http } from "@/utils/http";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postPaper = async (data: PostPaperRequest) => {
  return http.post<PostPaperRequest, PostPaperResponse>(`${API_BASE_URL}/paper`, data);
};

export const getPaper = async (data: GetPaperRequestParam) => {
  return http.get<GetPaperResponse>(`${API_BASE_URL}/paper/${data.id}`);
};