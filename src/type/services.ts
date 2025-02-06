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
  id: number;
};

export type GetBoardResponse = {
  id: number;
  name: string;
  showDate: Date;
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
  createdAt: Date;
  name: string;
  content: string;
};

export type GetPapersPageRequestParam = {
  boardId: number;
  cursor: number;
  limit: number;
};

export type GetPapersPageResponse = {
  responses: MultiplePaper[];
  hasNext: boolean;
  nextCursor: number;
};
