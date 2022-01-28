import React from "react";
import { useData } from "../Utils/DataContext";
import StripeCheckout from "react-stripe-checkout";

export default function Wishlist() {
  const { data, removeFromWishlist, clearWishlist } = useData();
  const publishableKey ="pk_test_51JdeY8SIty0bliO7n0EUmMgT3QFpuBUC40HFrd1kFZWOA5UNM7GuX5hQms97Y0W6iDUJJFnp1iy2j00u2HlR2sjz00uNrHkStz";

  const onRemove = (id) => () => {
    removeFromWishlist(id);
  };
  return (
    <div className="container wishlist">
      {(data.wishlist && (Object.keys(data.wishlist).length>0)) ? (
        <>
          <table>
            {Object.keys(data.wishlist).map((id) => (
              <tr>
                  <td>
                    {data.wishlist[id].name}
                  </td>
                  <td>Booked a table for 4</td>
                  <td>Book @ ₹100</td>
                  <td>{data.wishlist[id].quantity}</td>
                  <td>
                    <button onClick={onRemove(id)}>Remove</button>
                  </td>
                </tr>
              
            ))}
            <tr>
              <th> Total </th>
              <th> {(data.wishlist.quantity)*100} </th>
              <th> - </th>
            </tr>
          </table>

          <button className="standalone red" onClick={clearWishlist}>Clear Wishlist</button>
        </>
      ) : (
        <>
          <h1>Your Wishlist is empty</h1>
        </>
      )}
    </div>
  );
}
