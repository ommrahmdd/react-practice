import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  createSelector,
} from "@reduxjs/toolkit";
import { RootState } from "./store";
export interface IRecipe {
  recipe:
    | {
        label: string;
        image: string;
        source: string;
      }[]
    | [];
  loading: boolean;
  errorMessage: string;
}
let initialState: IRecipe = {
  loading: false,
  recipe: [],
  errorMessage: "",
};

export let getAllRecipes = createAsyncThunk(
  "addRecipes",
  async (_, ThunkApi) => {
    try {
      let res = await fetch(
        "https://api.edamam.com/search?q=chicken&app_id=1ed1e3a0&app_key=0b801416d7bf8e7c5dcc7303b28164e9"
      );
      let data = await res.json();
      return {
        recipe: data.hits,
      };
    } catch (err: any) {
      return err.message;
    }
  }
);

let recipeSlice = createSlice({
  name: "recipe",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllRecipes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      getAllRecipes.fulfilled,
      (state, action: PayloadAction<IRecipe>) => {
        state.recipe = action.payload.recipe;
        state.loading = false;
      }
    );
    builder.addCase(getAllRecipes.rejected, (state, action) => {
      state.errorMessage = action.error.message || "";
    });
  },
});

// export const getRecipes = (state: RootState) => state.recipes.recipe;
export const getRecipes = createSelector(
  (state: RootState) => state.recipes.recipe,
  (recipes) => {
    return recipes;
  }
);
export const getLoading = (state: RootState) => state.recipes.loading;
export const recipeReducer = recipeSlice.reducer;
