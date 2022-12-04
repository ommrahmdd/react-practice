import React, { useState, useEffect } from "react";
import { Container } from "../Container";
import SectionHeader from "../SectionHeader";
import { items } from "./data";
import useSpecialSection from "./SpecialSectionViewModel";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { getAllRecipes, getLoading, getRecipes } from "../../app/recipesSlice";
export default function SpecialSection() {
  let dispatch = useAppDispatch();
  let recipies = useAppSelector(getRecipes);
  let IS_LOADING = useAppSelector(getLoading);
  console.log(recipies);
  useEffect(() => {
    dispatch(getAllRecipes());
  }, []);
  return (
    <Container>
      <section className="py-32 ">
        <SectionHeader content="Our Specials" />
        {/* Cards */}
        <div className="grid grid-cols-2 gap-x-7 gap-y-48 relative z-10 md:gap-x-20 md:grid-cols-4">
          {!IS_LOADING ? (
            recipies?.slice(0, 8).map((foods: any, index: number) => (
              <div
                className="px-5 py-20 bg-white rounded-[3rem] flex flex-col items-center space-y-10 transition-all duration-300 ease-in-out cursor-pointer hover:opacity-80 hover:-translate-y-6"
                key={index}
              >
                <div className="w-40 h-4w-40 rounded-full overflow-hidden -mt-40 shadow-md md:h-44 md:w-44 lg:w-64 lg:h-64">
                  <img
                    src={foods.recipe.image}
                    alt="Image"
                    className="w-full h-full"
                  />
                </div>
                <h4 className="text-4xl max-w-xs text-center font-bold">
                  {foods.recipe.label}
                </h4>
                <p className="text-2xl text-foodiesPinkColor font-medium">
                  USD {foods.recipe.source}
                </p>
              </div>
            ))
          ) : (
            <div className="h-[100vh] w-full text-7xl text-white font-light flex justify-center items-center text-center">
              Loading
            </div>
          )}
        </div>
        {/* Overley */}
        <div className="absolute top-[60rem] left-0 w-[60rem] h-[60rem] rounded-full bg-foodiesBlueColor bg-opacity-30"></div>
      </section>
    </Container>
  );
}
