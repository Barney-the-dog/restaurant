export function reducer(state, action){
    switch(action.type) {
        case 'ADD_REST': {
            const newTask = action.payload
            return {...state, list: [...state.list, newTask]}
        }
        case 'DELETE_REST':{
            const id = action.payload
            return { ...state, list: state.list.filter(el => el.id !== id)}
        }
        case 'EDIT_REST': {
      const { id, text, description} = action.payload;
      const newList = state.list.map(el => {
          if (el.id === +id) {
            return {...el, text: text, description: description}
          }
            return el
          })
          return {...state, list: newList}
        }
        default: 
            return state
        }
    }