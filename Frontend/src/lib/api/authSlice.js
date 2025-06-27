// lib/api/authSlice.js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  token: null,
  user: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload
      state.token = token
      state.user = user
    },
    clearCredentials: (state) => {
      state.token = null
      state.user = null
    },
  },
})

// Export the action creator
export const { setCredentials, clearCredentials } = authSlice.actions

// Export the reducer as default
export default authSlice.reducer
