import { SET_ME } from "../action"


const initialState = {
    user: {
      me:null,
      current:null
    },
  }

  const mainReducer = (state = initialState, action) => {
   
    switch (action.type) {
      case SET_ME :
        return {
          ...state,
          user: {
            ...state.user,
            me: action.payload,
            //   NON FARE!!! content: state.cart.content.push(action.payload)
            //   content: state.cart.content.concat(action.payload),
          },
        }
      default:
        return state
      
    }
  }
  
  export default mainReducer