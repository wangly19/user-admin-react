import { Effect, Reducer, Subscription } from 'umi';
export interface IndexModelState {
  name: string;
}
export interface IndexModelType {
  namespace: 'login';
  effects: {
    query: Effect;
  };
  reducers: {
    save: Reducer<IndexModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<IndexModelState>;
  };
}
const IndexModel: IndexModelType = {
  namespace: 'login',
  state: {
  },
  effects: {
    *query({ payload }, { call, put }) {
      
      yield put({ type: 'index/save', payload })
    },
  },
  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload
      };
    },
  }
};
export default IndexModel;