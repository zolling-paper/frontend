export type PostBoardRequest = {
  name: string;
  password: string;
  showDate: string;
};

export type PostBoardResponse = {
  id: number;
  name: string;
  showDate: string;
};

export type GetBoardRequestParam = {
  id: number;
}

export type GetBoardResponse = {
  id: number;
  name: string;
  showDate: string;
};

export type PostPaperRequest = {
  boardId: number;
  name: string;
  content: string;
};

export type PostPaperResponse = {
  id: number;
  boardId: number;
  name: string;
  content: string;
};

export type GetPaperRequestParam = {
  id: number;
};

export type GetPaperResponse = {
  id: number;
  boardId: number;
  createdAt: string;
  name: string;
  content: string;
};