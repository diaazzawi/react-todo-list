import styled from "styled-components";
import tw from "tailwind-styled-components";

export const ListItem = tw.li`
    grid
    grid-cols-[auto_1fr_auto]
    items-center
    gap-3
    rounded-xl
    border-slate-400/40
    border-2
    p-2
`;

export const Span = tw.span`
    text-slate-600
    font-medium
    text-md
    truncate
    peer-checked:line-through
`;

const StyledCheckbox = styled.input.attrs({type: "checkbox"})``;

export const Checkbox = tw(StyledCheckbox)`
    h-5
    w-5
    my-auto
    ms-2
    accent-slate-600
    peer
    cursor-pointer
`;

export const ButtonsContainer = tw.div`
    flex
    gap-2
`;

const StyledButton = styled.button.attrs({type: "button"})``;

export const EditButton = tw(StyledButton)`
    bg-sky-700
    text-blue-100
    hover:text-white
    rounded-md
    p-2
    cursor-pointer
`;

export const DeleteButton = tw(StyledButton)`
    bg-rose-600
    text-red-100
    hover:text-white
    rounded-md
    p-2
    cursor-pointer
`;
