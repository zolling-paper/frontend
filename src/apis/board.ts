import {GetBoardRequestParam, GetBoardResponse, PostBoardRequest, PostBoardResponse} from '@type/services';
import {http} from '@utils/http';

import {API_BASE_URL} from './config';

export const postBoard = async (data: PostBoardRequest) => {
  return http.post<PostBoardRequest, PostBoardResponse>(`${API_BASE_URL}/board`, data);
};

export const getBoard = async (data: GetBoardRequestParam) => {
  return http.get<GetBoardResponse>(`${API_BASE_URL}/board/${data.id}`);
};
