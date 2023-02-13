import { Text } from '@/elements'
import { blue, gray, main, red, teal, yellow } from '@/styles/palette'
import styled from 'styled-components'
import GameDetail from './GameDetail'
import GameDetailHeader from './GameDetailHeader'
import ItemsBox from './ItemsBox'
import { MatchDetailProps } from './types'

const MatchDetail = ({ gameDatas, primaryPerks, teamId }: MatchDetailProps) => {
  const friendlyTeam = gameDatas.filter(data => data.teamId === teamId)
  const enemyTeam = gameDatas.filter(data => data.teamId !== teamId)

  console.log(friendlyTeam)
  return (
    <DetailWrapper>
      <GameDetailHeader isWin={friendlyTeam[0].win} teamId={teamId} />
      {friendlyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} primaryPerks={primaryPerks} />
      ))}

      <GameDetailHeader isWin={enemyTeam[0].win} teamId={enemyTeam[0].teamId} />
      {enemyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} primaryPerks={primaryPerks} />
      ))}
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  .summoner-container {
    padding-left: 10px;
    width: 175px;
    box-sizing: border-box;
  }

  .score-container {
    width: 68px;
  }

  .kda-container {
    width: 98px;
  }

  .damage-container {
    width: 120px;
  }

  .ward-container {
    width: 48px;
  }

  .minion-container {
    width: 56px;
  }

  .items-container {
    width: 175px;
  }
`

export default MatchDetail
