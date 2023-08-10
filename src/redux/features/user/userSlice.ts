import { auth } from '@/lib/firebase';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface IUser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
  isError: boolean;
  error: string | undefined;
}

interface ICredintial {
  email: string;
  password: string;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
  isError: false,
  error:  undefined,
};

export const createUser = createAsyncThunk(
  'user/createUser',
  async ({ email, password }: ICredintial) => {
    const data = await createUserWithEmailAndPassword(auth, email, password);
    return data.user.email;
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers : (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.isLoading = true;
      state.error = undefined;
      state.isError = false;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user.email = action.payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error.message;
    });
  }
});

export default userSlice.reducer;
