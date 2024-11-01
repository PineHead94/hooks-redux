import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postsInstance } from "../axios/instance";

const dataState = {
  data: {},
  postData: {},
  loading: false,
  error: "",
};

const getUsers = createAsyncThunk("getUsers", async () => {
  let data = await fetch(
    "https://pixabay.com/api/?key=46696729-b7f6896d646a67cda47ff162c&q=yellow+flowers&image_type=photo&pretty=true&per_page=3"
  );
  let response = await data.json();
  return response;
});

const getPosts = createAsyncThunk("getPosts", async () => {
  try {
    let data = await postsInstance.get("posts/1");
    return data.data;
  } catch (err) {
    return err.message;
  }
});

export const dataSlice = createSlice({
  name: "data",
  initialState: dataState,
  reducers: {
    testAction: (state, action) =>
      console.log(`test action ran ${action.payload}`),
  },
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = true;
      state.data = action.payload;
      state.loading = false;
    });
    builder.addCase(getUsers.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      if (action.payload === "Network Error") {
        state.postData = {
          error: action.payload,
        };
      } else {
        state.postData = {
          data: action.payload,
        };
      }
    });
    builder.addCase(getPosts.pending, (state, action) => {
      console.log(action);
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      console.log(action);
    });
  },
});

export { getUsers, getPosts };
export const { testAction } = dataSlice.actions;
export default dataSlice.reducer;
