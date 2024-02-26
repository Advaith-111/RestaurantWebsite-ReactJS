import React from "react";
import classes from "./thumbnails.module.css";
import { Link } from "react-router-dom";
import StarRating from "../StarRating/StarRating";
import Price from "../Price/Price";

export default function Thumbnails({ food }) {
  return (
    <ul className={classes.list}>
      {food.map((foodItem) => (
        <li key={foodItem.id}>
          <Link to={`/foods/${foodItem.id}`}>
            <img
              className={classes.image}
              src={`/foods/${foodItem.img_URL}`}
              alt={foodItem.name}
            />
          </Link>
          <div className={classes.content}>
            <div className={classes.name}>{foodItem.name}</div>
            <span
              className={`${classes.favorite} ${
                foodItem.favorite ? "" : classes.not
              }`}
            >
              ❤
            </span>
            <div className={classes.stars}>
              <StarRating stars={foodItem.rating} />
            </div>
            <div className={classes.product_item_footer}>
              <div className={classes.expiry_Time}>{foodItem.expiry}</div>
            </div>
            <div className={classes.price}>
              <Price price={foodItem.price} />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
