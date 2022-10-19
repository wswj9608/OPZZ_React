import React from 'react'
import styled from 'styled-components'
import HistoryCard from './HistoryCard'
import { useSummonerMatchs } from '@/atoms/summoners'

const Match = () => {
  const [matchs] = useSummonerMatchs()

  return (
    <MatchWrapper>
      {matchs?.map((match, idx) => (
        <HistoryCard key={idx} match={match} />
      ))}
    </MatchWrapper>
  )
}

const MatchWrapper = styled.div`
  width: 740px;
`

export default Match
