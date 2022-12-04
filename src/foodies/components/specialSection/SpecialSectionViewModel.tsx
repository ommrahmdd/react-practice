import React from "react";

export default function SpecialSectionViewModel() {
  let fetchFoods = async () => {
    // let res = await fetch(
    //   "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    // );
    let res = await fetch(
      "https://api.edamam.com/search?q=chicken&app_id=1ed1e3a0&app_key=0b801416d7bf8e7c5dcc7303b28164e9"
    );
    let data = await res.json();
    console.log(data);
    return data.hits;
  };
  return { fetchFoods };
}
