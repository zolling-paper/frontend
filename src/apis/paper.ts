import {
  PostPaperRequest,
  PostPaperResponse,
  GetPaperRequestParam,
  GetPaperResponse,
  GetPapersPageRequestParam,
  GetPapersPageResponse,
} from '@type/services';
import {http} from '@utils/http';

import {API_BASE_URL} from './config';

export const postPaper = async (data: PostPaperRequest) => {
  return http.post<PostPaperRequest, PostPaperResponse>(`${API_BASE_URL}/paper`, data);
};

export const getPaper = async (data: GetPaperRequestParam) => {
  return http.get<GetPaperResponse>(`${API_BASE_URL}/paper/${data.id}`, {
    credentials: 'include',
  });
};

export const getPapersPage = async ({boardId, cursor, limit}: GetPapersPageRequestParam) => {
  return http.get<GetPapersPageResponse>(`${API_BASE_URL}/board/${boardId}/papers/paging`, {params: {cursor, limit}});
};
