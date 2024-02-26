import React, { useEffect, useReducer } from "react";
import { getAll } from "../../services/foodService";
import Thumbnails from "../../components/Thumbnails/Thumbnails";

const InitialState = { food: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "ITEMS_LOADED":
      return { ...state, food: action.payload };
    default:
      return state;
  }
};

export default function HomePage() {
  const [state, dispacth] = useReducer(reducer, InitialState);
  const { food } = state;

  useEffect(() => {
    getAll().then((food) => dispacth({ type: "ITEMS_LOADED", payload: food }));
  }, []);
  return (
    <>
      <Thumbnails food={food} />
    </>
  );
}
