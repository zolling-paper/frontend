import {getPaper} from '@apis/paper';
import QUERY_KEY from '@constants/queryKey';
import {useQuery} from '@tanstack/react-query';

export const useRequestGetPaper = (id: number) => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEY.paper, id],
    queryFn: () => getPaper({id}),
  });

  return {...data, ...rest};
};
