import { createSlice } from "@reduxjs/toolkit";
interface User {
    isLoggedIn: boolean;
}
const initialState: User = {
    isLoggedIn: false,
};
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setIsLoggedIn: (state, action: { payload: boolean }) => {
            state.isLoggedIn = action.payload;
        },
    },
});
export const { setIsLoggedIn } = userSlice.actions;
export default userSlice.reducer;