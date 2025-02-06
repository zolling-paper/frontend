
import {postBoard} from '@apis/board';
import QUERY_KEY from '@constants/queryKey';
import {useMutation, useQueryClient} from '@tanstack/react-query';
import {PostBoardRequest} from '@type/services';

export const useRequestPostBoard = () => {
  const queryClient = useQueryClient();

  const {mutate, ...rest} = useMutation({
    mutationFn: (data: PostBoardRequest) => postBoard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: [QUERY_KEY.board, QUERY_KEY.papersPage]});
    },
  });

  return {mutate, ...rest};
};
