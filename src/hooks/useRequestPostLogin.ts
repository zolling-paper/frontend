import {postLogin} from '@apis/login';
import {useMutation} from '@tanstack/react-query';
import {PostLoginRequest} from '@type/services';

export const useRequestPostLogin = () => {
  const {mutate, ...rest} = useMutation({
    mutationFn: (data: PostLoginRequest) => postLogin(data),
  });

  return {mutate, ...rest};
};
