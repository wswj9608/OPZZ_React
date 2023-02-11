import { atom, useRecoilState } from 'recoil'

const summonerProfile = atom<SummonerProfileType | null>({
  key: 'summonerProfile',
  default: null,
})

const summonerMatchs = atom<SummonerMatchsType[] | null>({
  key: 'summonerMatchs',
  default: null,
})

const summonerLeagues = atom<LeagueDataType[] | null>({
  key: 'summonerLeaugues',
  default: null,
})

const summonerMatchStatistics = atom<MatchStatisticsType | null>({
  key: 'summonerMatchStatistics',
  default: null,
})

const summonerChampionStatistics = atom<ChampionStatisticsType[] | null>({
  key: 'summonerChampionStatistics',
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

export const useSummonerMatchStatistics = () => {
  return useRecoilState(summonerMatchStatistics)
}

export const useSummonerChampionStatistics = () => {
  return useRecoilState(summonerChampionStatistics)
}
