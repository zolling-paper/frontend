import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postBoard } from "@/apis/board";
import QUERY_KEY from "@/constants/queryKey";
import { PostBoardRequest } from "@/types/services";

export const useRequestPostBoard = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: (data: PostBoardRequest) => postBoard(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.board] });
    },
  });

  return { mutate, ...rest };
};
