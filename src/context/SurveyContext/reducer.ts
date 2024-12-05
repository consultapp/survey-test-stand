export function reducer(
  state: IQuestions,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  { type, payload }: { type: string; payload?: any }
) {
  const id = payload?.id || 0;
  console.log("id", id);

  switch (type) {
    case "setSliderValue": {
      state[id]?.variants[0]?.value = Number(payload.value ?? 0);

      return [...state];
    }

    default:
      break;
  }

  return state;
}
