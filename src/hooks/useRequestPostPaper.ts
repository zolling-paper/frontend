import { useMutation, useQueryClient } from "@tanstack/react-query";

import { postPaper } from "@/apis/paper";
import QUERY_KEY from "@/constants/queryKey";
import { PostPaperRequest } from "@/types/services";

export const useRequestPostPaper = () => {
  const queryClient = useQueryClient();

  const { mutate, ...rest } = useMutation({
    mutationFn: (data: PostPaperRequest) => postPaper(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY.paper] });
    },
  });

  return { mutate, ...rest };
};