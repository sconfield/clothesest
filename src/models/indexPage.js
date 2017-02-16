
export default {
  namespace: 'indexPage',
  state: {
    selected: 'index'
  },
  reducers: {
    handleClickMenu(state, action) {
      return {
        ...state,
        selected: action.selected
      }
    }
  },
  effects: {},
  subscriptions: {},
};
