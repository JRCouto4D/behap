import produce from 'immer';

const INITIAL_STATE = {
  messages: [],
};

export default function toast(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      default:
    }
  });
}
