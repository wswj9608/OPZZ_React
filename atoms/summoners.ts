import { atom, useRecoilState } from 'recoil'

export const summonerInfoToRecoil = atom<SummonerInfoType | null>({
  key: 'summonerInfoState',
  default: null,
})

export const useSummonerInfoState = () => {
  return useRecoilState(summonerInfoToRecoil)
}
