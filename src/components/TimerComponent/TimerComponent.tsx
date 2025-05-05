import {
  useHasTimer,
  useTimerData,
  useTimerDescription,
  useTimerSaveCallback,
} from '@/context/TimerContext/hooks'
import { Box, Button, Flex, Stack, Text } from '@mantine/core'
import { useCallback, useEffect, useRef, useState } from 'react'
import { useIntersection } from '@mantine/hooks'

const formatTime = (t: number) =>
  `${Math.floor(t / 3600)
    .toString()
    .padStart(2, '0')}:${Math.floor((t % 3600) / 60)
    .toString()
    .padStart(2, '0')}:${(t % 60).toString().padStart(2, '0')}`

export const TimerComponent = () => {
  const hasTimer = useHasTimer()
  const startSeconds = useTimerData()
  const description = useTimerDescription()
  const saveTimer = useTimerSaveCallback()
  const [time, setTime] = useState(startSeconds)
  const [isRunning, setIsRunning] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval>>()
  const { ref, entry } = useIntersection({
    root: null,
    threshold: 0.1,
  })

  const startTimer = useCallback(() => {
    setIsRunning(true)
    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }, [])

  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  useEffect(() => {
    if (time % 10 === 9) saveTimer(time)
  }, [saveTimer, time])

  if (!hasTimer) return null

  return (
    <>
      <Stack
        ref={ref}
        gap="xs"
        mb="sm"
        style={{
          padding: '1rem',
          marginTop: '-1rem',
        }}
      >
        <Flex
          direction="row"
          gap="xs"
          align="center"
          justify="flex-end"
          w="100%"
          style={{ placeSelf: 'baseline' }}
        >
          {!isRunning && (
            <Button
              onClick={startTimer}
              variant="outline"
              color="darkgreen"
              size="lg"
              disabled={isRunning}
              bg="var(--mantine-color-body)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" />
              </svg>
              &nbsp;Запустить таймер
            </Button>
          )}
          <Box
            style={{
              minWidth: '175px',
              border: '1px solid black',
              borderRadius: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingInline: '1rem',
              fontSize: '2.2rem',
              fontWeight: 600,
              fontFamily: 'monospace',
              gap: '5px',
              background: 'var(--mantine-color-body)',
              height: '50px',
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path
                d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
                fill={isRunning ? 'darkgreen' : 'darkred'}
              />
            </svg>
            {formatTime(time)}
          </Box>
        </Flex>
        <Text style={{ placeSelf: 'end' }}>{description}</Text>
      </Stack>
      {!entry?.isIntersecting && isRunning && (
        <Box
          style={{
            position: 'fixed',
            bottom: 75,
            right: 35,
            zIndex: 1000,
            border: '1px solid black',
            borderRadius: '1rem',
            display: 'flex',
            alignItems: 'center',
            padding: '0.5rem 1rem',
            fontSize: '1.5rem',
            fontWeight: 600,
            fontFamily: 'monospace',
            gap: '5px',
            background: 'var(--mantine-color-body)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path
              d="M12 7a5 5 0 1 1 -4.995 5.217l-.005 -.217l.005 -.217a5 5 0 0 1 4.995 -4.783z"
              fill={isRunning ? 'darkgreen' : 'darkred'}
            />
          </svg>
          {formatTime(time)}
        </Box>
      )}
    </>
  )
}
