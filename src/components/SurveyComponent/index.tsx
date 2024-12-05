import SurveyProvider from "@/context/SurveyContext/SurveyContext";
import SurveyQuestions from "./SurveyQuestions/SurveyQuestions";

export default function SurveyContainer() {
  return (
    <SurveyProvider>
      <div>
        <h2>Заголовок 2</h2>
        <SurveyQuestions />
      </div>
    </SurveyProvider>
  );
}
