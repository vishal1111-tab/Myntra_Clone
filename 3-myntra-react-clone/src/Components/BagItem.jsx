import React from "react";
import { useDispatch } from "react-redux";
import { bagActions } from "../store/BagSlice";
import { MdDelete } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
function BagItem({ item }) {
  const dispatch = useDispatch((store) => store.bag);

  const handleRemoveItem = () => {
    dispatch(bagActions.removeBag(item.id));
  };

  return (
    <div className="bag-item-container">
      <div className="item-left-part">
        <img className="bag-item-img" src={item.image} />
      </div>
      <div className="item-right-part">
        <div className="company">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="optItem">
          <select className="optionSize">
            <option>Size : 40</option>
            <option>Size : 38</option>
            <option>Size : 30</option>
            <option>Size : 28</option>
          </select>
          <select className="optionSize">
            <option>Qty : 1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>
        <div className="price-container">
          <span className="current-price">₹{item.current_price}</span>
          <span className="original-price">₹{item.original_price}</span>
          <span className="discount-percentage">
            {item.discount_percentage}% OFF
          </span>
        </div>
        <div className="return-period">
          <span className="return-period-days">
            {" "}
            <GiReturnArrow />
            {item.return_period} days
          </span>{" "}
          return available
        </div>
        <div className="delivery-details">
          Delivery by
          <span className="delivery-details-days">{item.delivery_date}</span>
        </div>
      </div>

      <div className="remove-from-cart" onClick={handleRemoveItem}>
        <MdDelete style={{ color: " #db4b4b" }} />
      </div>
    </div>
  );
}

export default BagItem;
