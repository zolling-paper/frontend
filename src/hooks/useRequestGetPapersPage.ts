import {useQuery} from '@tanstack/react-query';

import {getPapersPage} from '@apis/paper';
import QUERY_KEY from '@constants/queryKey';

interface Params {
  boardId: number;
  cursor: number;
  limit: number;
}

export const useRequestGetPapersPage = ({boardId, cursor, limit}: Params) => {
  const {data, ...rest} = useQuery({
    queryKey: [QUERY_KEY.papersPage, boardId, cursor, limit],
    queryFn: () => getPapersPage({boardId, cursor, limit}),
  });

  return {...data, ...rest};
};
