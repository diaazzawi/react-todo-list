import {Pencil, Trash} from "lucide-react";
import {FC, memo, useCallback} from "react";
import {
  ButtonsContainer,
  Checkbox,
  DeleteButton,
  EditButton,
  ListItem,
  Span,
} from "./TodoListItem.styles";
import type {TListItemProps} from "./types";

const TodoListItem: FC<TListItemProps> = ({
  todo,
  onCompletedChange,
  onDelete,
  onEdit,
}) => {
  const handleCompletedChange = useCallback(() => {
    onCompletedChange?.(todo);
  }, [onCompletedChange, todo]);

  const handleEdit = useCallback(() => {
    onEdit?.(todo);
  }, [onEdit, todo]);

  const handleDelete = useCallback(() => {
    onDelete?.(todo);
  }, [onDelete, todo]);

  return (
    <ListItem>
      <Checkbox checked={todo.completed} onChange={handleCompletedChange} />
      <Span>{todo.title}</Span>
      <ButtonsContainer>
        <EditButton onClick={handleEdit}>
          <Pencil size={20} />
        </EditButton>
        <DeleteButton id="delete" onClick={handleDelete}>
          <Trash size={20} />
        </DeleteButton>
      </ButtonsContainer>
    </ListItem>
  );
};

export default memo(TodoListItem);
