import { Text } from '@/elements'
import { gray, main, red } from '@/styles/palette'
import styled from 'styled-components'
import { GameDetailHeaderProps } from './types'

const GameDetailHeader = ({ isWin, teamId }: GameDetailHeaderProps) => {
  const team = teamId === 100 ? '블루팀' : '레드팀'
  return (
    <DetailHeader isWin={isWin}>
      <div className="summoner-container">
        <Text>
          <span style={{ color: isWin ? main[600] : red[600] }}>{isWin ? '승리' : '패배'}</span> ({team})
        </Text>
      </div>
      <div className="score-container">{/* <Text>OP Score</Text> */}</div>
      <div className="kda-container">
        <Text>KDA</Text>
      </div>
      <div className="damage-container">
        <Text>피해량</Text>
      </div>
      <div className="ward-container">
        <Text>와드</Text>
      </div>
      <div className="minion-container">
        <Text>CS</Text>
      </div>
      <div className="items-container">
        <Text>아이템</Text>
      </div>
    </DetailHeader>
  )
}

const DetailHeader = styled.div<{ isWin: boolean }>`
  display: flex;
  text-align: center;
  height: 32px;
  background-color: ${gray[0]};
  border-bottom: 1px solid;
  border-color: ${({ isWin }) => (isWin ? main[200] : red[200])};
  align-items: center;

  .summoner-container {
    text-align: start;
    padding-left: 15px;
  }
`

export default GameDetailHeader
