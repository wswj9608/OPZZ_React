import { atom, useRecoilState } from 'recoil'

export const summonerProfile = atom<SummonerProfileType | null>({
  key: 'summonerProfile',
  default: null,
})

export const summonerMatchs = atom<SummonerMatchsType[] | null>({
  key: 'summonerMatchs',
  default: null,
})

const summonerLeagues = atom<LeagueDataType[] | null>({
  key: 'summonerLeaugues',
  default: null,
})

export const useSummonerProfile = () => {
  return useRecoilState(summonerProfile)
}

export const useSummonerMatchs = () => {
  return useRecoilState(summonerMatchs)
}

export const useSummonerLeagues = () => {
  return useRecoilState(summonerLeagues)
}
