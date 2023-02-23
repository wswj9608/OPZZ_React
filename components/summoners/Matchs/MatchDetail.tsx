import { ProgressBar, Text } from '@/elements'
import { blue, gray, main, red, teal, yellow } from '@/styles/palette'
import styled from 'styled-components'
import GameDetail from './GameDetail'
import GameDetailHeader from './GameDetailHeader'
import ItemsBox from './ItemsBox'
import { MatchDetailProps } from './types'
import IconBaron from '@/assets/images/icons/icon-baron.svg'
import IconDragon from '@/assets/images/icons/icon-dragon.svg'
import IconTower from '@/assets/images/icons/icon-tower.svg'
import { useTeamsSelector } from '@/atoms/summoners'
import TotalMatchStatus from './TotalMatchStatus'

const MatchDetail = ({ gameDatas, teamId, gameId }: MatchDetailProps) => {
  // const teams = useTeamsSelector()

  const friendlyTeam = gameDatas.filter(data => data.teamId === teamId)
  const enemyTeam = gameDatas.filter(data => data.teamId !== teamId)

  const isWin = friendlyTeam[0].win
  const isEnemyTeamWin = !isWin

  return (
    <DetailWrapper>
      <GameDetailHeader isWin={isWin} teamId={teamId} />
      {friendlyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} />
      ))}

      <TotalMatchStatus gameId={gameId} />

      <GameDetailHeader isWin={isEnemyTeamWin} teamId={enemyTeam[0].teamId} />
      {enemyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} />
      ))}
      <div className="bottom" />
    </DetailWrapper>
  )
}

const DetailWrapper = styled.div`
  border-radius: 4px;
  overflow: hidden;

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

  .bottom {
    background-color: ${gray[0]};
    height: 33px;
  }
`

export default MatchDetail
