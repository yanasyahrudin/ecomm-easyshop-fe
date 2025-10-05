import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { get_order_details } from "../../store/reducers/orderReducer";

const OrderDetails = () => {
  const { orderId } = useParams();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const { myOrder } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(get_order_details(orderId));
  }, [orderId]);

  return (
    <div className="bg-white p-5">
      <h2>
        #{myOrder._id}, <span className="pl-1">{myOrder.date}</span>
      </h2>
      Deliver To: {myOrder.shippingInfo?.address}
      <p>
        <span className="bg-blue-100 text-blue-100 text-xs font-medium mr-2 py-2 rounded">
          Home
        </span>
        <span className="text-slate-600 text-sm">
          {myOrder.shippingInfo?.address}
          {myOrder.shippingInfo?.province}
          {myOrder.shippingInfo?.city}
        </span>
      </p>
      <p className="text-slate-600 text-md font-semibold">
        Email To: {userInfo.email}
      </p>
    </div>
  );
};

export default OrderDetails;
