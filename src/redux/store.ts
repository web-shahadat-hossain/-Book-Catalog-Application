import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./feature/user/userSlice";
import {api} from "./api/apiSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
  [api.reducerPath]: api.reducer,

  },
   // and other useful features of `rtk-query`.
   middleware: (getDefaultMiddleware) =>
   getDefaultMiddleware().concat(api.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
