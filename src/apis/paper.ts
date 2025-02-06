import {getEnvVariable} from '@/env';
import {
  PostPaperRequest,
  PostPaperResponse,
  GetPaperRequestParam,
  GetPaperResponse,
  GetPapersPageRequestParam,
  GetPapersPageResponse,
} from '@/types/services';
import {http} from '@/utils/http';

const API_BASE_URL = getEnvVariable('VITE_API_BASE_URL');

export const postPaper = async (data: PostPaperRequest) => {
  return http.post<PostPaperRequest, PostPaperResponse>(`${API_BASE_URL}/paper`, data);
};

export const getPaper = async (data: GetPaperRequestParam) => {
  return http.get<GetPaperResponse>(`${API_BASE_URL}/paper/${data.id}`);
};

export const getPapersPage = async ({boardId, cursor, limit}: GetPapersPageRequestParam) => {
  return http.get<GetPapersPageResponse>(`${API_BASE_URL}/board/${boardId}/papers/paging`, {params: {cursor, limit}});
};
