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

export type YMD = {
  year: number;
  month: number;
  day: number;
};
