import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface WebComponents {
  header: string | null;
  banner: string | null;
  section: string | null;
  footer: string | null;
}

const initialComponents: WebComponents = {
  header: null,
  banner: null,
  section: null,
  footer: null,
};

const createWebSlice = createSlice({
  name: "webComponents",
  initialState: initialComponents,
  reducers: {
    setHeader: (state, action: PayloadAction<string | null>) => {
      state.header = action.payload;
    },
    setBanner: (state, action: PayloadAction<string | null>) => {
      state.banner = action.payload;
    },
    setSection: (state, action: PayloadAction<string | null>) => {
      state.section = action.payload;
    },
    setFooter: (state, action: PayloadAction<string | null>) => {
      state.footer = action.payload;
    },
    resetComponents: (state) => {
      state.header = null;
      state.banner = null;
      state.section = null;
      state.footer = null;
    },
  },
});

export const { setHeader, setBanner, setSection, setFooter, resetComponents } =
  createWebSlice.actions;
export default createWebSlice.reducer;
