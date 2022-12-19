import { RootState, AppDispatch } from "./store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export let useAppDispatch = () => useDispatch<AppDispatch>();
export let useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
