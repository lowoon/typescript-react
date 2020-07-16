import {AnyAction} from "redux";
import {ICounter} from "./type";
import {createAction, handleActions} from "redux-actions";

interface IAction extends AnyAction {
    type: string,
}

const INCREASE: string = "INCREASE";
const DECREASE: string = "DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

const initialState: ICounter = {
    number: 0
}

const counter = handleActions({
    [INCREASE]: (state, action) => ({number: state.number + 1}),
    [DECREASE]: (state, action) => ({number: state.number - 1}),
}, initialState)

export default counter;
