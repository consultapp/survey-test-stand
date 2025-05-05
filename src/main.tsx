import { reactRender } from './elma.tsx'

reactRender({
  root: document.querySelector(`.surveyQuizRoot`),
  timer: {
    time: 60,
    description: 'Local test timer descr',
    saveCallback: (t: number) => {
      console.log('local test timer callback', t)
    },
  },
})
