import { EffectsCommandMap } from 'dva';
import { AnyAction } from 'redux';
import { Effect, Reducer, Subscription } from 'umi';
export interface IAuthState {
  router: Array<any>
}
export interface RouterModel {
  namespace: 'router';
  state: IAuthState;
  reducers: {
    addRoutes: Reducer<IAuthState>;
  };
}
const routerModel: RouterModel = {
  namespace: 'router',
  state: {
    router: []
  },
  reducers: {
    addRoutes(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  }
};
export default routerModel;