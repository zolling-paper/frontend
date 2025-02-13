import {PostLoginRequest} from '@type/services';
import {http} from '@utils/http';

import {API_BASE_URL} from './config';

export const postLogin = async (data: PostLoginRequest) => {
  return http.post<PostLoginRequest>(`${API_BASE_URL}/login`, data);
};
