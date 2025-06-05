import { reactRender } from './elma.tsx'
import { log } from './utils.ts'

reactRender({
  root: document.querySelector(`.surveyQuizRoot`),
  timer: {
    time: 60,
    description: 'Local test timer descr',
    saveCallback: (t: number) => {
      log('local test timer callback', t)
    },
  },
})
