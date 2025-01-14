import { GetBoardRequestParam, GetBoardResponse, PostBoardRequest, PostBoardResponse } from "@/types/services";
import { http } from "@/utils/http";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const postBoard = async (data: PostBoardRequest) => {
  return http.post<PostBoardRequest, PostBoardResponse>(`${API_BASE_URL}/board`, data);
};

export const getBoard = async (data: GetBoardRequestParam) => {
  return http.get<GetBoardResponse>(`${API_BASE_URL}/board/${data.id}`);
};
