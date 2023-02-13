import { getSubPerkIcon } from '@/assets/images/subPerkIcons'
import { useSummonerMatchs } from '@/atoms/summoners'
import { Text } from '@/elements'
import { gray, main, red, teal, yellow } from '@/styles/palette'
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

  return (
    <GameDetailWrapper>
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
        <Text weight="bold" color={teal[600]}>
          {kda ? `${kda} : 1` : 'perfect'}
        </Text>
      </div>
      <div className="damage damage-container">
        <div>
          <Text>11,111</Text>
          <div className="bar chmap-damage" />
        </div>
        <div>
          <Text>11,111</Text>
          <div className="bar total-damage" />
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

const GameDetailWrapper = styled.div`
  background-color: ${main[100]};
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

    .bar {
      width: 50px;
      height: 6px;
      background-color: ${red[600]};
    }

    .total-damage {
      background-color: ${gray[400]};
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
