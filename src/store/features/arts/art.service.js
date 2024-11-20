import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../../utils/Api";

const getHlp = createAsyncThunk(
  "hlp/getHlp",
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get(`admin/hlp`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const postTopHlp = createAsyncThunk(
  "hlp/postTopHlp",
  async ({ id, hlps }, { rejectWithValue }) => {
    try {
      const response = await api.post(`admin/hlp/update-top`, { id, hlps });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export { getHlp, postTopHlp };
