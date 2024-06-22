import { SyntheticEvent, createContext } from "react";

export const AddToPortfolioContext = createContext<
  (e: SyntheticEvent, ticker: string, displayName: string) => void
>(() => {});
