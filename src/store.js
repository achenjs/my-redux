let state = {
  color: 'blue',
};

function createStore (state) {
  //  获取state
  const getState = () => state;

  //  修改state
  function changeState(action) {
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

  return {
    getState,
    changeState,
  };
}



function renderApp() {
  const body = document.body;
  body.style.background = state.color;
}

export {
  renderApp,
  createStore,
}