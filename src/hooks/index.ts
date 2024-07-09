import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';
import { State, AppDispatch } from '../types/global';


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
