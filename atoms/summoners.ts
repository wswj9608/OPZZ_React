import { SearchSummoner } from '@/lib/api/types'
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil'

// atoms
const searchSummonerState = atom<SearchSummoner | null>({
  key: 'searchSummonerState',
  default: null,
})

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

// selectors
const profileSelector = selector({
  key: 'profileSelector',
  get: ({ get }) => get(searchSummonerState)?.summonerProfile,
})

const leaguesSelector = selector({
  key: 'leaguesSelector',
  get: ({ get }) => get(searchSummonerState)?.summonerProfile.leagues,
})

const matchesSelector = selector({
  key: 'matchesSelector',
  get: ({ get }) => get(searchSummonerState)?.matches,
})

// atom hooks
export const useSearchSummonerState = () => {
  return useRecoilState(searchSummonerState)
}

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

// selector hooks
export const useSummonerProfileSelector = () => {
  return useRecoilValue(profileSelector)
}

export const useLeaguesSelector = () => {
  return useRecoilValue(leaguesSelector)
}

export const useMatchesSelector = () => {
  return useRecoilValue(matchesSelector)
}
