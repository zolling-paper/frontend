export type Board = {
  id: number;
  name: string;
  showDate: string;
};

export type Paper = {
  id: number;
  boardId: number;
  name: string;
  content: string;
};