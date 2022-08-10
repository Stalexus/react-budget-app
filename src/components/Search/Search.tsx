import { useEffect } from "react";
import { useInput } from "../../hooks/useInput";
import { useSearch } from "../../hooks/useSearch";
import { StyledSearch } from "./styles";


interface IProps {
  searchExpenses: (searchPattern: string) => void;
}

export const Search = ({ searchExpenses }: IProps) => {
  const [inputStateConfig] = useInput("");
  const { value } = inputStateConfig;
  const searchValue = useSearch(value, 500);

  useEffect(() => {
    searchExpenses(searchValue);
  }, [searchExpenses, searchValue]);

  return <StyledSearch placeholder="search ..." {...inputStateConfig} />;
};