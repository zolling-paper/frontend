import {getBoard} from '@apis/board';
import QUERY_KEY from '@constants/queryKey';
import {useQuery} from '@tanstack/react-query';

export const useRequestGetBoard = (id: string) => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEY.board, id],
    queryFn: () => getBoard({id}),
  });

  return {...data, ...rest};
};
