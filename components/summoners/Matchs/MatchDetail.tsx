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

const MatchDetail = ({ gameDatas, teamId }: MatchDetailProps) => {
  const friendlyTeam = gameDatas.filter(data => data.teamId === teamId)
  const enemyTeam = gameDatas.filter(data => data.teamId !== teamId)

  const isWin = friendlyTeam[0].win
  const isEnemyTeamWin = !isWin

  const friendlyIconColor = isWin ? blue[500] : red[500]
  const enemyIconColor = isEnemyTeamWin ? blue[500] : red[500]

  return (
    <DetailWrapper>
      <GameDetailHeader isWin={isWin} teamId={teamId} />
      {friendlyTeam.map(data => (
        <GameDetail key={data.summonerName} gameData={data} />
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
          <div>
            <ProgressBar
              width={60}
              height={16}
              bgColor={isWin ? red[500] : main[500]}
              fill={isWin ? main[500] : red[500]}
            />
            <div className="text-wrap">
              <Text>34</Text>
              <Text>Total Kill</Text>
              <Text>17</Text>
            </div>
          </div>
          <div>
            <ProgressBar
              width={30}
              height={16}
              bgColor={isWin ? red[500] : main[500]}
              fill={isWin ? main[500] : red[500]}
            />
            <div className="text-wrap">
              <Text>53,099</Text>
              <Text>Total Gold</Text>
              <Text>42,587</Text>
            </div>
          </div>
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
    width: 389px;
    padding: 8px;

    > div {
      position: relative;
      margin-bottom: 8px;

      &:last-child {
        margin-bottom: 0;
      }

      .text-wrap {
        position: absolute;
        width: 389px;
        left: 0;
        top: 0;
        display: flex;
        justify-content: space-between;
        padding: 0 8px;
        box-sizing: border-box;

        p {
          font-size: 10px;
          color: ${gray[900]};
        }
      }
    }
  }

  /* .bar {
    height: 16px;
    margin-bottom: 8px;
    background-color: ${red[500]};

    &:last-child {
      margin-bottom: 0;
    }
  } */
`

export default MatchDetail
