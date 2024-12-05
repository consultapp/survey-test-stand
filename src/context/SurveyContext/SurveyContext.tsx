import React, { useReducer } from "react";
import { SurveyContext, SurveyContextDispatch, initialSurveyData } from ".";
import { reducer } from "./reducer";

type Props = { children: React.ReactElement };

export default function SurveyProvider({ children }: Props) {
  const [state, dispatch] = useReducer(reducer, initialSurveyData);

  return (
    <SurveyContextDispatch.Provider value={dispatch}>
      <SurveyContext.Provider value={state}>{children}</SurveyContext.Provider>
    </SurveyContextDispatch.Provider>
  );
}
