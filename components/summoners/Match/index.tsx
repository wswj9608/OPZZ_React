import React, { useEffect } from 'react'
import styled from 'styled-components'
import HistoryCard from './HistoryCard'
import { useSummonerMatchs } from '@/atoms/summoners'
import { getMatchsToAxios } from '@/lib/api/matchs'
import { useRouter } from 'next/router'

const Match = () => {
  const { isReady } = useRouter()
  const [matchs, setMatchs] = useSummonerMatchs()

  const getMatchs = async () => {
    const res = await getMatchsToAxios()
    setMatchs(res)
  }

  useEffect(() => {
    getMatchs()
  }, [])

  if (!matchs) return null
  if (!isReady) return null

  return (
    <MatchWrapper>
      {matchs.map((match, idx) => (
        <HistoryCard key={idx} match={match} />
      ))}
    </MatchWrapper>
  )
}

const MatchWrapper = styled.div`
  width: 740px;
  margin-top: 8px;
`

export default Match
