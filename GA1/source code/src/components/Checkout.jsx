import { useStateValue } from "../context/StateProvider";

const Checkout = () => {
  const [{ cartItems }] = useStateValue();
  let totalPrice = 0;

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            <div>Name: {item.title}</div>
            <div>Price: {item.price}</div>
          </li>
        ))}
      </ul>
      {cartItems.forEach((item) => {
        totalPrice = totalPrice + parseInt(item.price);
      })}
      {(totalPrice = totalPrice + 20)}
      <h1 className="text-center font-bold">Total price: {totalPrice}</h1>
      <button className="w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg">
        Pay
      </button>
    </div>
  );
};

export default Checkout;
