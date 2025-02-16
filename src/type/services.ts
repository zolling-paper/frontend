import {MultiplePaper} from './model';

export type PostBoardRequest = {
  name: string;
  password: string;
  showDate: Date;
};

export type PostBoardResponse = {
  id: number;
  name: string;
  showDate: Date;
};

export type GetBoardRequestParam = {
  id: string;
};

export type GetBoardResponse = {
  id: string;
  name: string;
  showDate: Date;
};

export type PostPaperRequest = {
  boardId: string;
  name: string;
  content: string;
};

export type PostPaperResponse = {
  id: number;
  boardId: string;
  name: string;
  content: string;
};

export type GetPaperRequestParam = {
  id: string;
};

export type GetPaperResponse = {
  id: number;
  boardId: string;
  createdAt: Date;
  name: string;
  content: string;
};

export type GetPapersPageRequestParam = {
  boardId: string;
  cursor: number;
  limit: number;
};

export type GetPapersPageResponse = {
  responses: MultiplePaper[];
  hasNext: boolean;
  prevCursor: number | null;
  nextCursor: number | null;
};

export type PostLoginRequest = {
  id: string;
  password: string;
};
