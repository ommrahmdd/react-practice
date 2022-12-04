import {
  recipeReducer,
  IRecipe,
  getAllRecipes,
  getRecipes,
} from "./recipesSlice";
import { store } from "./store";
import { RootState } from "./store";

describe("recipeSlice", () => {
  jest.mock("./recipesSlice", () => {
    return {
      async getAllRecipes() {
        try {
          return {
            recipe: [
              {
                image: "",
                label: "",
                source: "",
              },
            ],
          };
        } catch (err) {
          return "Not Found";
        }
      },
    };
  });
  it("Return initialState if no actions pass", () => {
    let iniitialState: IRecipe = {
      loading: false,
      recipe: [],
      errorMessage: "",
    };
    let action = { type: "" };
    let state = recipeReducer(iniitialState, action);
    expect(state).toEqual(iniitialState);
  });
  it("thunk", async () => {
    let iniitialState: RootState = {
      recipes: {
        loading: false,
        recipe: [],
        errorMessage: "",
      },
    };
    let dispatch = jest.fn();
    let thunk = getAllRecipes();
    await thunk(dispatch, () => iniitialState, undefined);
    const { calls } = dispatch.mock;
    expect(calls.length).toEqual(2);
    expect(calls[0][0].type).toEqual("addRecipes/pending");
    expect(calls[1][0].type).toEqual("addRecipes/fulfilled");
  });
  it("getRecipes with createSelector", async () => {
    let state: RootState = {
      recipes: {
        errorMessage: "",
        loading: false,
        recipe: [],
      },
    };
    let dispatch = jest.fn();
    let thunk = getAllRecipes();
    await thunk(dispatch, () => state, undefined);
    console.log(dispatch.mock.calls);
  });
});
