import Image from "next/image"
import React from "react"
import styled from "styled-components"
import { useSummonerInfoState } from "../../atoms/summoners"
import { Button, Text } from "../../elements"

const Profile = ({ summonerInfo }: ProfileProps) => {
  const { imageUrl, summonerLevel, name } = summonerInfo

  console.log(imageUrl)

  return (
    <ProfileWrapper>
      <div className="profile">
        <div className="image-box">
          <Image
            className="icon"
            src={imageUrl}
            alt="profile"
            width="100"
            height="100"
          />
          <div className="level">
            <Text size="12px" color="#FFF">
              {summonerLevel}
            </Text>
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
          <div className="ranking">
            <Text size="12px" color="#7b7a8e">
              래더 랭킹 <span>156,676</span> 위 (상위 3.71%)
            </Text>
          </div>
          <div className="button-wrap">
            <Button type="A">전적 갱신</Button>
            <Button type="B">티어 그래프</Button>
            <Button type="A" color="#7d59ea">
              롤 몇 시간 했는지 궁금해?
            </Button>
          </div>
          <Text size="12px" color="#7b7a8e">
            최근 업데이트: 5일 전
          </Text>
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

export default Profile
