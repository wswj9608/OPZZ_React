import styled from 'styled-components'
import { useMatchesSelector } from '@/atoms/summoners'
import { useRouter } from 'next/router'
import HistoryCard from './HistoryCard'

const Matchs = () => {
  const { isReady } = useRouter()
  const matchs = useMatchesSelector()

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
`

export default Matchs
