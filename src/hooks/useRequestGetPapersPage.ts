import {getPapersPage} from '@apis/paper';
import QUERY_KEY from '@constants/queryKey';
import {useQuery} from '@tanstack/react-query';

interface Params {
  boardId: string;
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
