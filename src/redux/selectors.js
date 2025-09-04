import { selectCampersError, selectCampersLoading } from "./campers/selectors";

export function selectLoading(state) {
  return selectCampersLoading(state);
}

export function selectError(state) {
  return selectCampersError(state);
}
