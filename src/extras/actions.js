import {Routes} from "../routes/routes";

export const RECORD_EXTRAS='RECORD_EXTRAS';

export const recordExtras = () => (dispatch) => {
    dispatch({ type: RECORD_EXTRAS });
};