import { HYDRATE } from "next-redux-wrapper";
import { AppState } from "./reducer";
/**
 * hydrate action is an initialization action which contains the state created from the server
 * every reducer must handle this action and take it's state from the latest value
 */
export default interface HydrateAction {
    type: typeof HYDRATE;
    payload: AppState;
}