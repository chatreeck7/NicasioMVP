export interface User {
  firstname: string 
  lastname: string
  email: string
  password: string
  sex: string
  role: string
}

interface AuthState {
  user: User | null
  isLoading: boolean
  isError: boolean
  isSuccess: boolean
  message: string | null
}

export interface LoginUser {
  email: string
  password: string
}

export interface RootState {
  auth: AuthState
}
