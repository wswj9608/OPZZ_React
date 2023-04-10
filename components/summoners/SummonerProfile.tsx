import Image from 'next/image'
import styled from 'styled-components'
import { Button, Text } from '@/elements'
import { useSummonerProfileSelector } from '@/atoms/summoners'

function SummonerProfile() {
  const summonerProfile = useSummonerProfileSelector()

  if (!summonerProfile) return null

  const { summonerIconImageUrl, summonerLevel, name } = summonerProfile
  const ifiUrl = `http://ifi.gg/summoner/${name}`

  return (
    <ProfileWrapper>
      <div className="profile">
        <div className="image-box">
          <Image className="icon" src={summonerIconImageUrl} alt="profile" width="100" height="100" />
          <div className="level">
            <Text color="#FFF">{summonerLevel}</Text>
          </div>
        </div>
        <div className="profile-state">
          <div className="tier-history">
            <div className="badge">
              <Text size="10px" color="#7b7a8e">
                S2021 Platinum 4
              </Text>
            </div>
            <div className="badge">
              <Text size="10px" color="#7b7a8e">
                S2021 Platinum 4
              </Text>
            </div>
            <div className="badge">
              <Text size="10px" color="#7b7a8e">
                S2021 Platinum 4
              </Text>
            </div>
          </div>
          <div className="user-name">
            <Text size="24px" color="#FFF" weight="bold">
              {name}
            </Text>
          </div>
          <div className="button-wrap">
            <Button buttonType="fill">전적 갱신</Button>
            <a target="_blank" href={ifiUrl} rel="noreferrer">
              <Button buttonType="fill" color="#7d59ea">
                롤 몇 시간 했는지 궁금해?
              </Button>
            </a>
          </div>
        </div>
      </div>
    </ProfileWrapper>
  )
}

const ProfileWrapper = styled.div`
  width: 100%;
  height: 228px;
  background: #31313c;

  .profile {
    max-width: 1080px;
    margin: auto;
    padding: 45px 0 25px;
    display: flex;
    gap: 24px;
  }

  .image-box {
    position: relative;
    width: 100px;
    height: 100px;

    .icon {
      border-radius: 20px;
    }

    .level {
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translate(-50%, 0%);
      width: fit-content;
      height: 20px;
      padding: 0px 8px;
      background-color: #202d37;
      border-radius: 10px;
      display: flex;
      align-items: center;
    }
  }

  .tier-history {
    display: flex;
    gap: 4px;
  }

  .badge {
    width: fit-content;
    display: flex;
    align-items: center;
    height: 20px;
    padding: 0 4px;
    border-radius: 2px;
    background-color: #1c1c1f;
  }

  .user-name {
    margin-top: 8px;
  }

  .ranking {
    margin-top: 6px;
    span {
      color: #5383e8;
    }
  }

  .button-wrap {
    margin: 12px 0px;
    display: flex;
    gap: 8px;
  }
`

export default SummonerProfile
