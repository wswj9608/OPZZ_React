import { getSubPerkIcon } from '@/assets/images/subPerkIcons'
import { useSummonerMatchs, useSummonerProfile } from '@/atoms/summoners'
import { ProgressBar, Text } from '@/elements'
import { gray, main, orange, red, teal, yellow } from '@/styles/palette'
import { COMMUNITY_DRAGON_URL, getPrimaryPerk } from '@/utils'
import Image from 'next/image'
import styled from 'styled-components'
import ItemsBox from './ItemsBox'
import { GameDetailProps } from './types'

const GameDetail = ({ gameData, primaryPerks }: GameDetailProps) => {
  const {
    champLevel,
    summonerSpells,
    primaryPerkId,
    subPerkStyleId,
    items,
    win,
    summonerName,
    kills,
    assists,
    deaths,
    kda,
    status,
  } = gameData

  const primeryPerk =
    COMMUNITY_DRAGON_URL + getPrimaryPerk(primaryPerks, primaryPerkId)?.icon_path.split('v1')[1].toLowerCase()

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
    if (!kda || kda > 4) return orange[600]
    if (kda < 3) return gray[600]
    return teal[600]
  }

  return (
    <GameDetailWrapper bgColor={bgColor()}>
      <div className="summoner summoner-container">
        <div className="champion">
          <div className="icon" />
          <div className="level">
            <Text style={{ fontSize: '10px' }} color={gray[900]}>
              {champLevel}
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
          <Image src={primeryPerk} alt="champ" width={16} height={16} layout="fixed" />
          <Image src={getSubPerkIcon(subPerkStyleId)} alt="champ" width={16} height={16} layout="fixed" />
        </div>
        <div className="name">
          <Text color={gray[900]}>{summonerName}</Text>
          <Text>Gold 2</Text>
        </div>
      </div>

      <div className="score score-container">
        <Text style={{ fontSize: '12px', width: '20px' }} color={gray[900]} weight="bold">
          <i>7.6</i>
        </Text>
        <div className="badge">
          <Text color={gray[900]}>MVP</Text>
        </div>
      </div>
      <div className="kda kda-container">
        <Text>
          {kills} / {deaths} / {assists} ({status.killParticipationRate}%)
        </Text>
        <Text weight="bold" color={kdaColor()}>
          {kda ? `${kda} : 1` : 'perfect'}
        </Text>
      </div>
      <div className="damage damage-container">
        <div className="total-damage">
          <Text>11,111</Text>
          <ProgressBar width={40} height={6} fill={red[500]} />
        </div>
        <div className="total-taken">
          <Text>11,111</Text>
          <ProgressBar width={40} height={6} />
        </div>
      </div>
      <div className="ward ward-container">
        <Text>{status.visionWardsBoughtInGame}</Text>
        <Text>7 / 1</Text>
      </div>
      <div className="minion minion-container">
        <Text>{status.totalMinionsKilled}</Text>
        <Text>분당 {status.minionsPerMinute}</Text>
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

      .icon {
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
