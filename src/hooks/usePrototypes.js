import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export const usePrototypes = () => {
  const { prototypes } = useContext(AppStateContext);
  return prototypes;
};
