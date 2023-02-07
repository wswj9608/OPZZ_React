import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { gray } from '@/styles/palette'
import { Button, Text } from '@/elements'
import Image from 'next/image'

const Home: NextPage = () => {
  const router = useRouter()
  const [summonerName, setSummonerName] = useState<string>()
  const logoImageUrl =
    'https://opgg-static.akamaized.net/logo/20230206131423.df67f1f7a3094bf28afbee32ed4cd362.png?image=q_auto,f_webp,w_auto&v=1675746334392'
  const searchButtonImageUrl = 'https://s-lol-web.op.gg/images/icon/icon-gg.svg'
  const searchInputPlaceHolder = '소환사명, 소환사명, ...'

  const handleSummonerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setSummonerName(value)
  }

  const searchSummonerName = () => {
    if (!summonerName) return

    router.push(`/summoners/${summonerName}`)
  }

  const onKeyDown = (event: React.KeyboardEvent) => {
    const { key } = event

    if (key === 'Enter') {
      searchSummonerName()
    }
  }

  return (
    <HomeWrapper>
      <div>
        <Image src={logoImageUrl} alt="logo" width={550} height={285} />
      </div>
      <SearchInput>
        <div className="region">
          <Text className="label">Region</Text>
          <Text color={gray[400]}>Korea</Text>
        </div>
        <div className="search">
          <Text className="label">Search</Text>
          <input type="text" onChange={handleSummonerName} placeholder={searchInputPlaceHolder} onKeyDown={onKeyDown} />
        </div>
        <div className="search-button">
          <button onClick={searchSummonerName}>
            <Image src={searchButtonImageUrl} alt="search" width={100} height={45} />
          </button>
        </div>
      </SearchInput>
    </HomeWrapper>
  )
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 56px;
  box-sizing: border-box;
  gap: 46px;
  height: 100vh;
  background-color: #1c1c1f;
`

const SearchInput = styled.div`
  width: 800px;
  box-sizing: border-box;
  height: 60px;
  background-color: ${gray[0]};
  border-radius: 30px;
  display: flex;
  padding: 0 24px;
  align-items: center;

  .region {
    width: 100%;
    padding: 0 8px 0 8px;
    margin-right: 8px;
    position: relative;

    ::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -7px;
      width: 1px;
      height: 14px;
      background: ${gray[200]};
    }
  }

  .search {
    width: 480px;
    min-width: 480px;

    input {
      width: 100%;
      box-sizing: border-box;
      border: 0;
      background: none;
      font-size: 14px;
      color: ${gray[900]};

      &:focus-visible {
        outline: none;
      }
    }
  }

  .label {
    color: ${gray[900]};
    font-size: 12px;
    margin-bottom: 4px;
  }

  .search-button {
    padding-left: 12px;

    button {
      cursor: pointer;
      width: 42px;
      padding: 0;
      background: none;
    }
  }
`

export default Home
