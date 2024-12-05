export function reducer(
  state: IQuestions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: { type: string; payload?: any }
) {
  const id = payload?.id || 0;
  console.log("id", id);
  switch (type) {
    // case "elementHeight":
    // case "elementWidth": {
    //   const n =
    //     parseFloat(payload.value) > DEFAULT_WIDTH &&
    //     payload.element === "elementWidth"
    //       ? `${DEFAULT_WIDTH}`
    //       : payload.value;

    //   state[id] = {
    //     ...state[id],
    //     [payload.element]: parseFloat(n.replaceAll(regNumber, "")),
    //   };

    //   const best = SurveyClass.getRunningMetersByCountBestPosition(
    //     state[id].elementCount || 1,
    //     state[id].elementWidth,
    //     state[id].elementHeight
    //   );

    //   state[id] = {
    //     ...state[id],
    //     elementCount: state[id].elementCount || 1,
    //     runningMeter: best?.meters,
    //     elementPosition: best?.position ?? POSITION.album,
    //   };
    //   return [...state];
    // }

    // case "elementCount": {
    //   const count = payload.value.replaceAll(regInteger, "");

    //   const best = SurveyClass.getRunningMetersByCountBestPosition(
    //     count,
    //     state[id].elementWidth,
    //     state[id].elementHeight
    //   );

    //   state[id] = {
    //     ...state[id],
    //     elementCount: count,
    //     runningMeter: best?.meters,
    //     elementPosition: best?.position ?? POSITION.album,
    //   };

    //   return [...state];
    // }

    default:
      break;
  }

  return state;
}
