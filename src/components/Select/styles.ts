import { StylesConfig } from "react-select";
import { ICurrencyOption } from "../../types/";

export const StyledSelect: StylesConfig<ICurrencyOption> = {
    control: (styles) => ({
      ...styles,
      textAlign: "left",
      borderRadius: "5px",
      marginLeft: "116px",
      marginRight: "20px",
      marginTop: "20px",
      width: "83px",
      height: "30px",
      fontSize: "12px",
      padding: "0"
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: "none",
    }),
    option: (styles) => ({
        ...styles,
        fontSize: "12px",
      }),
  };