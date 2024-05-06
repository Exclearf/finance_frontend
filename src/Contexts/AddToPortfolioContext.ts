import { SyntheticEvent, createContext } from "react";

export const AddToPortfolioContext = createContext<
  (e: SyntheticEvent, value: string) => void
>(() => {});
