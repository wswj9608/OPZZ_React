import { useSummonerMatchs, useSummonerProfile } from '@/atoms/summoners'
import { ProgressBar, Text } from '@/elements'
import { blue, gray, main, orange, red, teal, yellow } from '@/styles/palette'
import { perkIcon } from '@/utils'
import Image from 'next/image'
import styled from 'styled-components'
import ItemsBox from './ItemsBox'
import { GameDetailProps } from './types'

const GameDetail = ({ gameData }: GameDetailProps) => {
  const {
    champion,
    challenges,
    summonerSpells,
    primaryPerkId,
    subPerkStyleId,
    items,
    win,
    summonerName,
    kills,
    assists,
    deaths,
    visionWardsBoughtInGame,
    totalMinionsKilled,
    minionsPerMinute,
    wardsPlaced,
    wradsKilled,
    totalDamageDealtToChampions,
    damageDealtToChampionPercent,
    totalDamageTaken,
    damageTakenPercent,
  } = gameData

  console.log('data =========>', totalDamageDealtToChampions)

  const { championLevel, championIcon } = champion
  const { kda, killParticipation } = challenges

  const [summonerProfile] = useSummonerProfile()
  const isMe = summonerProfile?.name === summonerName

  const bgColor = () => {
    if (win) {
      if (isMe) {
        return main[300]
      } else {
        return main[100]
      }
    } else {
      if (isMe) {
        return red[300]
      } else {
        return red[100]
      }
    }
  }

  const kdaColor = () => {
    if (kda < 3) return gray[600]
    if (kda < 4) return teal[600]
    if (kda < 5) return blue[600]
    return orange[600]
    // return teal[600]
  }

  return (
    <GameDetailWrapper bgColor={bgColor()}>
      <div className="summoner summoner-container">
        <div className="champion">
          <Image className="champ-icon" src={championIcon} alt="champ" width={32} height={32} />
          <div className="level">
            <Text style={{ fontSize: '10px' }} color={gray[900]}>
              {championLevel}
            </Text>
          </div>
        </div>
        <div className="spells">
          {summonerSpells.map(spell => (
            <Image
              key={spell.spell_id}
              className="spell-icon"
              src={spell.image_url}
              alt="champ"
              width={16}
              height={16}
              layout="fixed"
            />
          ))}
        </div>
        <div className="runes">
          <Image src={perkIcon(primaryPerkId)} alt="champ" width={16} height={16} layout="fixed" />
          <Image src={perkIcon(subPerkStyleId)} alt="champ" width={16} height={16} layout="fixed" />
        </div>
        <div className="name">
          <Text color={gray[900]}>{summonerName}</Text>
          <Text>Gold 2</Text>
        </div>
      </div>

      <div className="score score-container">
        {/* <Text style={{ fontSize: '12px', width: '20px' }} color={gray[900]} weight="bold">
          <i>7.6</i>
        </Text>
        <div className="badge">
          <Text color={gray[900]}>MVP</Text>
        </div> */}
      </div>
      <div className="kda kda-container">
        <Text>
          {kills} / {deaths} / {assists} ({killParticipation}%)
        </Text>
        <Text weight="bold" color={kdaColor()}>
          {kda ? `${kda} : 1` : 'perfect'}
        </Text>
      </div>
      <div className="damage damage-container">
        <div className="total-damage">
          <Text>{totalDamageDealtToChampions.toLocaleString()}</Text>
          <ProgressBar width={damageDealtToChampionPercent} height={6} fill={red[500]} />
        </div>
        <div className="total-taken">
          <Text>{totalDamageTaken.toLocaleString()}</Text>
          <ProgressBar width={damageTakenPercent} height={6} />
        </div>
      </div>
      <div className="ward ward-container">
        <Text>{visionWardsBoughtInGame}</Text>
        <Text>
          {wardsPlaced} / {wradsKilled}
        </Text>
      </div>
      <div className="minion minion-container">
        <Text>{totalMinionsKilled}</Text>
        <Text>분당 {minionsPerMinute}</Text>
      </div>
      <div className="items items-container">
        <ItemsBox items={items} isWin={win} />
      </div>
    </GameDetailWrapper>
  )
}

const GameDetailWrapper = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  padding: 4px 0 3px;
  display: flex;
  align-items: center;

  p {
    font-size: 11px;
  }

  .summoner {
    display: flex;
    align-items: center;

    .champion {
      position: relative;
      height: fit-content;

      .champ-icon {
        width: 32px;
        height: 32px;
        background-color: ${main[300]};
        border-radius: 50%;
      }

      .level {
        position: absolute;
        bottom: -3px;
        left: -3px;
        width: 15px;
        height: 15px;
        background-color: #202d37;
        border-radius: 50%;
        text-align: center;
      }
    }

    .spells {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-left: 2px;
      .spell-icon {
        width: 16px;
        height: 16px;
        border-radius: 4px;
        background-color: ${red[200]};
      }
    }

    .runes {
      display: flex;
      flex-direction: column;
      gap: 2px;
      margin-left: 2px;
      .main {
        border-radius: 50%;
      }

      .rune-icon {
        width: 16px;
        height: 16px;
        background-color: red;
      }
    }
  }

  .score {
    display: flex;
    gap: 4px;
    text-align: center;
    justify-content: center;

    .badge {
      background-color: ${yellow[500]};
      padding: 0 8px;
      border-radius: 9px;

      p {
        line-height: 18px;
      }
    }
  }

  .kda {
    text-align: center;
  }

  .damage {
    display: flex;
    gap: 8px;
    justify-content: center;

    .total-damage,
    .total-taken {
      width: 50px;

      p {
        margin-bottom: 4px;
      }
    }

    div {
      text-align: center;
    }
  }

  .ward {
    text-align: center;
  }

  .minion {
    text-align: center;
  }
`

export default GameDetail
