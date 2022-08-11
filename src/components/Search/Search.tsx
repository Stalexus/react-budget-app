import { useEffect } from "react";
import { useExpenseContext } from "../../context";
import { useInput } from "../../hooks/useInput";
import { useSearch } from "../../hooks/useSearch";
import { StyledSearch } from "./styles";


interface IProps {
  searchExpenses: (searchPattern: string) => void;
}

export const Search = ({ searchExpenses }: IProps) => {
  const searchInput = useInput();
  const searchRequest = useSearch(searchInput.value, 500);
  const { expenses } = useExpenseContext();


  useEffect(() =>
    searchExpenses(searchRequest),
    [searchRequest, expenses]);

  return <StyledSearch placeholder="search ..." {...searchInput} />;
};