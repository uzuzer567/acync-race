import RaceState from '../garage/race/raceState';

export type handlerT = (e?: Event) => void

export type winnerT = {
  id: number
  wins: number
  time: number
}

export type newUserT = {
  id: number
  wins: number
  time: number
}

export type carT = {
  name: string
  color: string
  id: number
}

export type newCarT = {
  name: string,
  color: string,
}

export type DbCarsArrT = Array<carT>
export type eItoDbCarsIT = (DbCarsArr: DbCarsArrT, id: number) => number

export type PaginationStateT = {
  garagePage: number
  winnersPage: number
}

export type startEngineApiDataT = {
  velocity: number
  distance: number
}

export type getWinnersApiDataT = Array<winnerT>

export type nowSortedByT = {
  id: number
  wins: number
  time: number
}

export type RaceStateKeyT = keyof typeof RaceState

export type RaceStateT = {
  id: {
    id: number
    isCarStoped: boolean
    driveStatus: number
    duration: number
  }
}
