import actionTypes from '../actions/actionTypes';

const initialState = {
    isLoggedIn: false,
    adminInfo: null,
    tours:[]
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADMIN_LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: true,
                adminInfo: action.adminInfo
            }
        case actionTypes.ADMIN_LOGIN_FAIL:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }
        case actionTypes.PROCESS_LOGOUT:
            return {
                ...state,
                isLoggedIn: false,
                adminInfo: null
            }

            // ============fech all tour=======
    case actionTypes.FETCH_ALL_TOUR_SUCCESS:
        state.tours = action.tours;
        return {
          ...state,
        };
      case actionTypes.FETCH_ALL_TOUR_FAIDED:
        state.tours = [];
        return {
          ...state,
        };
        default:
            return state;
    }
}

export default appReducer;