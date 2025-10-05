import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../features/orders/orderSlice";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [orderId]);

  return <div>OrderDetails</div>;
};

export default OrderDetails;
