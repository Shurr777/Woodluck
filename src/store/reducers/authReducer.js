import {UserAPI} from "../../api/api";

const SET_AUTH = 'SET_AUTH'
const SET_ERROR = 'SET_ERROR'
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_USER = 'SET_USER'

const initialState = {
    isAuth: false,
    error: "",
    isLoading: false,
    user: "Anonymous"

}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SET_AUTH:
            return {
                ...state,
                isAuth: action.payload,
                isLoading: false
            }
        case SET_USER:
            console.log("reducer", action.payload)
            return {
                ...state,
                user: action.payload
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

/*---Action Creators---*/

export const AuthActionCreators = {
    setUser: user => ({type: SET_USER, payload: user}),
    setIsAuth: auth => ({type: SET_AUTH, payload: auth}),
    setError: payload => ({type: SET_ERROR, payload}),
    setIsLoading: payload => ({type: SET_IS_LOADING, payload}),

    login: (username, password) => async (dispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async () => {
                const response = await UserAPI.getUsers()
                const mockUser = response.data.find(
                    user => user.username === username && user.password === password
                )
                console.log("response", response.data)
                console.log("mockUser", mockUser)
                if(mockUser) {
                console.log("dispatch", mockUser)
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', mockUser.username)
                    dispatch(AuthActionCreators.setUser(mockUser))
                    dispatch(AuthActionCreators.setIsAuth(true))

                } else {
                    dispatch(AuthActionCreators.setError('Неправильный логин или пароль'))
                }
                dispatch(AuthActionCreators.setIsLoading(false))
            }, 1000)
        } catch (e) {
            dispatch(AuthActionCreators.setError('Что то не так при логине'))
        }
    },

    logout: () => async (dispatch) => {
        localStorage.removeItem('auth')
        localStorage.removeItem('username')
        dispatch(AuthActionCreators.setUser({}))
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}