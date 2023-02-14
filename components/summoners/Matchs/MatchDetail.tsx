import { Text } from '@/elements'
import { blue, gray, main, red, teal, yellow } from '@/styles/palette'
import styled from 'styled-components'
import GameDetail from './GameDetail'
import GameDetailHeader from './GameDetailHeader'
import ItemsBox from './ItemsBox'
import { MatchDetailProps } from './types'
import IconBaron from '@/assets/images/icons/icon-baron.svg'
import IconDragon from '@/assets/images/icons/icon-dragon.svg'
import IconTower from '@/assets/images/icons/icon-tower.svg'

const MatchDetail = ({ gameDatas, primaryPerks, teamId }: MatchDetailProps) => {
  const friendlyTeam = gameDatas.filter(data => data.teamId === teamId)
  const enemyTeam = gameDatas.filter(data => data.teamId !== teamId)
  const friendlyIconColor = friendlyTeam[0].win ? blue[500] : red[500]
  const enemyIconColor = enemyTeam[0].win ? blue[500] : red[500]

  return (
    <DetailWrapper>
      <GameDetailHeader isWin={friendlyTeam[0].win} teamId={teamId} />
      {friendlyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} primaryPerks={primaryPerks} />
      ))}

      <TotalMatchStatus>
        <div className="object">
          <div>
            <IconBaron fill={friendlyIconColor} />
            <Text>0</Text>
          </div>
          <div>
            <IconDragon fill={friendlyIconColor} />
            <Text>1</Text>
          </div>
          <div>
            <IconTower fill={friendlyIconColor} />
            <Text>5</Text>
          </div>
        </div>
        <div className="total">
          <div className="bar" />
          <div className="bar" />
        </div>
        <div className="object">
          <div>
            <IconBaron fill={enemyIconColor} />
            <Text>0</Text>
          </div>
          <div>
            <IconDragon fill={enemyIconColor} />
            <Text>1</Text>
          </div>
          <div>
            <IconTower fill={enemyIconColor} />
            <Text>5</Text>
          </div>
        </div>
      </TotalMatchStatus>

      <GameDetailHeader isWin={enemyTeam[0].win} teamId={enemyTeam[0].teamId} />
      {enemyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} primaryPerks={primaryPerks} />
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

const TotalMatchStatus = styled.div`
  display: flex;
  padding: 0 16px;
  background-color: ${gray[100]};
  justify-content: space-between;
  align-items: center;

  .object {
    display: flex;
    gap: 16px;

    div {
      display: flex;
      gap: 4px;
    }
  }

  .total {
    padding: 8px;
  }

  .bar {
    width: 389px;
    height: 16px;
    background-color: ${red[500]};
    margin-bottom: 8px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`

export default MatchDetail
