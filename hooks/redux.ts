import { AppDispatch, RootState } from "@/lib/store";
import {
    useDispatch,
    useSelector,
    type TypedUseSelectorHook,
} from "react-redux"


export const useAppdispatch= () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;