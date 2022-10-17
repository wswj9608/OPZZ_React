import React from 'react'
import styled from 'styled-components'
import HistoryCard from './HistoryCard'

const Match = ({ matchData }: MatchProps) => {
  console.log(matchData)

  return (
    <MatchWrapper>
      <HistoryCard />
    </MatchWrapper>
  )
}

const MatchWrapper = styled.div`
  width: 740px;
  background-color: blue;
`

export default Match
