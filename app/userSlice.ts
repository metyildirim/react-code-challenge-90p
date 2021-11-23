import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { AppState } from "./store";

export interface UserState {
  id: number;
  name: string;
  lastname: string;
  phone: string;
  email: string;
  birthday: string;
}

const initialState: UserState = {
  id: 0,
  name: "",
  lastname: "",
  phone: "",
  email: "",
  birthday: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.id = action.payload.id;
      state.name = action.payload.name;
      state.lastname = action.payload.lastname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      state.birthday = action.payload.birthday;
    },
  },
});

export const { setUser } = userSlice.actions;

export const selectUser = (state: AppState) => state.user;

export default userSlice.reducer;
