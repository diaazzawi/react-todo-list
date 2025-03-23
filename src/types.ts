import React from "react";

export interface ITodoBase {
  title: string;
  actors: string[];
  completed: boolean;
  year?: number;
}

export type TTodo = ITodoBase & {
  _id: string;
};

export enum operations {
  NONE = 0,
  ADD = 1,
  UPDATE = 2,
  DELETE = 3,
}

export type TVirt = {
  tot: number;
  sk: number | null;
  lt: number;
  hm: boolean;
};

export type TTodos = {
  list: TTodo[];
  selectedIds: string[];
  virt: TVirt;
  isSrch: boolean;
  loadList: boolean;
  operation: operations;
  isReady: boolean;
};

export type TPartialList<T> = {
  list: T;
  tot: number;
};

export type TEditRefHandle = {
  edit: (todo: TTodo) => void;
  close: () => void;
};

export type TTodoEditor = {
  todo: TTodo;
  editDialogRef?: React.RefObject<TEditRefHandle>;
};

export type TTodoEvents = {
  onCompletedChange: (item: TTodo) => void;
  onDelete: (item: TTodo) => void;
  onEdit: (item: TTodo) => void;
};

export type TListProps = TTodoEvents & {
  todosState: TTodos;
  EditDialogRef: React.RefObject<TEditRefHandle | null>;
};

export type TListItemProps = TTodoEvents & {
  todo: TTodo;
};
