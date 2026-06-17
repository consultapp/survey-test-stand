export const log = (..._: unknown[]) => {
  if (import.meta.env.DEV) 
    console.log('REACT: ', ..._)
}
