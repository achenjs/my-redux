//  修改state
function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        color: action.payload,
      }
    default:
      return state;
  }
}

function createStore(reducer) {
  let state = {
    color: 'blue',
  };
  //  获取state
  const getState = () => state;

  const dispatch = (action) => {
    //  reducer 接收老状态和action，返回一个新状态
    state = reducer(state, action);
  }

  return {
    getState,
    dispatch,
  };
}

function renderApp(state) {
  const body = document.body;
  body.style.background = state.color;
}

export {
  renderApp,
  createStore,
  reducer,
}