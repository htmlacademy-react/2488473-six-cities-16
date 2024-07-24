import { CitiesLocations, NameSpace } from "../../../const";
import { State, TSortType } from "../../../types/global";


export const getCurrentCity = (state: State): typeof CitiesLocations[number] => state[NameSpace.Main].currentCity;
export const getCurrentSort = (state: State): TSortType => state[NameSpace.Main].currentSort;
