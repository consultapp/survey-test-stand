import { useQuestion } from '@/context/SurveyContext/hooks'
import { Button, Flex, Text } from '@mantine/core'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

type Props = { id: string }

const getTimerText = (t: number) =>
  new Date(t * 1000).toLocaleString('ru-RU', { timeZone: 'UTC' }).split(' ')[1]

export const TimerComponent = ({ id }: Props) => {
  const question = useQuestion(id)
  const [t, setT] = useState(question?.timer?.maxDuration ?? 0)
  const direction = useMemo(
    () => (question?.timer?.type === 'countdown' ? -1 : 1),
    [question?.timer?.type]
  )
  const interval = useRef<ReturnType<typeof setInterval> | null>(null)
  const [play, setPlay] = useState(false)

  const toggleHandler = useCallback(() => {
    setPlay((prev) => !prev)
  }, [])

  const stopHandler = useCallback(() => {
    setPlay(false)
    if (interval.current) clearInterval(interval.current)
    interval.current = null
  }, [])

  useEffect(() => {
    return () => stopHandler()
  }, [stopHandler])

  useEffect(() => {
    if (play) {
      if (!interval.current)
        interval.current = setInterval(() => {
          setT((prev) => prev + direction)
        }, 1000)
    } else {
      stopHandler()
    }
  }, [play, direction, stopHandler])

  useEffect(() => {
    if (t < 1 && question?.timer?.type === 'countdown') {
      stopHandler()
    }
  }, [t, question?.timer?.type, stopHandler])

  if (!question?.timer) return

  return (
    <Flex
      direction="row"
      gap="xs"
      align="center"
      style={{ placeSelf: 'baseline' }}
    >
      <Text>{getTimerText(t)}</Text>
      <Button
        size="xs"
        onClick={toggleHandler}
        variant="outline"
        color="#000"
        disabled={Boolean(!t) && question.timer.type !== 'timer'}
      >
        {!play ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-player-play"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="icon icon-tabler icons-tabler-filled icon-tabler-player-pause"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M9 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
            <path d="M17 4h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h2a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2z" />
          </svg>
        )}
      </Button>
    </Flex>
  )
}
