import { SyntheticEvent, createContext } from "react";

export const DeleteFromPortfolioContext = createContext<
  (e: SyntheticEvent, value: string) => void
>(() => {});
