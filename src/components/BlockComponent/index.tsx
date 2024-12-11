// import { useElmaData } from '@/context/ElmaContext/hooks'

// import { useState } from 'react'
// import { Stepper, Button, Group } from '@mantine/core'
// import { SurveyComponent } from '../SurveyComponent'
// import styles from './styles.module.scss'

// const BlockComponent = () => {
//   const data = useElmaData()

//   const [active, setActive] = useState(0)
//   const nextStep = () =>
//     setActive((current) => (current < data.length ? current + 1 : current))
//   const prevStep = () =>
//     setActive((current) => (current > 0 ? current - 1 : current))

//   return (
//     <>
//       <Stepper active={active} onStepClick={setActive} className={styles.root}>
//         {data.map((d) => (
//           <Stepper.Step label={d.name} description={d.helper_text} key={d.id}>
//             <SurveyComponent
//               questions={d.questions}
//               key={`SurveyComponent:${d.id}`}
//             />
//           </Stepper.Step>
//         ))}

//         <Stepper.Completed>
//           <div className={styles.root__complete}>Опрос завершен.</div>
//         </Stepper.Completed>
//       </Stepper>

//       <Group justify="center" mt="xl">
//         {active > 0 && (
//           <Button variant="default" onClick={prevStep}>
//             Назад
//           </Button>
//         )}
//         {active < data.length && <Button onClick={nextStep}>Далее</Button>}
//       </Group>
//     </>
//   )
// }

// export { BlockComponent }
