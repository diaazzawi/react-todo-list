import tw from "tailwind-styled-components";

export const Section = tw.section`
    flex
    flex-col
    gap-2
`;

export const GroupTitle = tw.h3`
    text-slate-500
    text-sm
    font-medium
    ml-auto
`;

export const List = tw.ul`
   flex
   flex-col
   gap-2
`;

export const Paragraph = tw.p`
    text-slate-500
    text-center
    rounded-xl
    border-slate-400/40
    border-2
    p-3
`;
