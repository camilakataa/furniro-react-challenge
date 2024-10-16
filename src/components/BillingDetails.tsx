import { useState, useEffect } from "react";
import PlaceOrderButton from "./UI/PlaceOrderButton";
import { useCart } from "../context/CartContext";
import { auth, dbUsers } from "../services/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import axios from "axios";
import { z } from "zod";
import { useNavigate } from "react-router-dom";

const billingDetailsSchema = z.object({
  zipCode: z.string().length(8, { message: "Zip Code must be 8 digits" }),
});

const BillingDetails = () => {
  const { cartItems } = useCart();
  const [userDetails, setUserDetails] = useState(null);
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState({});
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const priceDiscount = (price: number, discount: number): number => {
    return price * (1 - discount);
  };

  const subtotal = (price: number, qty: number): number => {
    return price * qty;
  };

  const cartTotal = (): number => {
    return cartItems.reduce(
      (total, item) =>
        total +
        subtotal(
          priceDiscount(item.normalPrice, item.discountPercentage),
          item.qty
        ),
      0
    );
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      const docRef = doc(dbUsers, "Users", user.uid);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("User is not logged in");
      }
    });
  };

  useEffect(() => {
    fetchUserData();

    const searchAddress = async () => {
      axios
        .get(`https://viacep.com.br/ws/${zipCode}/json/`)
        .then(function (response) {
          setAddress(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    if (zipCode.length === 8) {
      searchAddress();
    } else {
      setAddress(null);
    }
  }, [zipCode]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      setZipCode(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      billingDetailsSchema.parse({ zipCode: zipCode });
      navigate("/Success")
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formattedErrors = error.errors.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {});
        setErrors(formattedErrors);
      } else {
        console.error(error.message);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center lg:flex-row lg:items-start lg:gap-10 xl:gap-28 p-14"
    >
      <div className="max-w-[608px]">
        <h2 className="font-semibold text-[36px]">Billing details</h2>
        <div>
          <div className="flex justify-between gap-6 py-6">
            <div className="flex flex-col">
              <label className="pb-4" htmlFor="">
                First Name
              </label>
              <input
                className="h-[75px] w-[150px] md:w-[211px] p-2 border-solid border border-gray-500 rounded-md"
                type="text"
                value={userDetails ? userDetails.firstName : ""}
              />
            </div>
            <div className="flex flex-col">
              <label className="pb-4" htmlFor="">
                Last Name
              </label>
              <input
                className="h-[75px] w-[150px] md:w-[211px] p-2 border-solid border border-gray-500 rounded-md"
                type="text"
                value={userDetails ? userDetails.lastName : ""}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="pb-4" htmlFor="">
              Company Name (optional)
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
            />

            <label className="pb-4" htmlFor="">
              Zip Code
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md"
              type="text"
              onChange={handleInputChange}
            />
            {errors.zipCode && (
              <p className="text-red-500 pt-2">{errors.zipCode}</p>
            )}

            <label className="pb-4 mt-6" htmlFor="">
              Country/ Region
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
              value={address ? "Brazil" : " "}
            />
            <label className="pb-4" htmlFor="">
              Street address
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
              value={address ? address.logradouro : " "}
            />
            <label className="pb-4" htmlFor="">
              Town/ City
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
              value={address ? address.localidade : " "}
            />
            <label className="pb-4" htmlFor="">
              Province
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
              value={address ? address.bairro : " "}
            />
            <label className="pb-4" htmlFor="">
              Add-on address
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-6"
              type="text"
            />
            <label className="pb-4" htmlFor="">
              Email address
            </label>
            <input
              className="h-[75px] p-2 border-solid border border-gray-500 rounded-md mb-14"
              type="email"
              value={userDetails ? userDetails.email : ""}
            />
            <input
              className="h-[75px] border-solid border border-gray-500 rounded-md mb-6 p-4 text-sm font-light"
              type="text"
              placeholder="Additional information"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center mt-8 lg:w-[400px] xl:w-[533px]">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-[24px]">Product</h3>
          <h3 className="font-medium text-[24px]">Subtotal</h3>
        </div>
        {cartItems.length === 0 ? (
          <p className="mb-3 text-lg font-light">Carrinho Vazio</p>
        ) : (
          <>
            <ul className="mb-3">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center mb-3"
                >
                  <div className="flex gap-3">
                    <p className="font-normal text-gray-400">{item.title}</p>
                    <p>
                      x <span>{item.qty}</span>
                    </p>
                  </div>
                  <p className="font-light">
                    R${" "}
                    {subtotal(
                      priceDiscount(item.normalPrice, item.discountPercentage),
                      item.qty
                    ).toFixed(2)}
                  </p>
                </li>
              ))}
            </ul>
            <div className="flex justify-between items-center mb-5">
              <p className="font-normal text-sm">Subtotal</p>
              <p className="font-light text-sm">R$ {cartTotal().toFixed(2)}</p>
            </div>
          </>
        )}

        <div className="flex justify-between items-center pb-6 border-solid border border-x-0 border-t-0 border-gray-200">
          <p className="font-normal">Total</p>
          <p className="font-bold text-[24px] text-yellow-dark">
            R$ {cartTotal().toFixed(2)}
          </p>
        </div>
        <div className="pt-6 py-4">
          <input type="radio" name="transfer" id="transfer" checked />
          <label
            className="pl-4 text-gray-400 font-normal checked:text-black checked:font-bold"
            htmlFor="transfer"
          >
            Direct Bank Transfer
          </label>
        </div>
        <div>
          <input
            className="checked:bg-black"
            type="radio"
            name="transfer"
            id="cash"
          />
          <label className="pl-4 text-gray-400 font-normal" htmlFor="cash">
            Cash On Delivery
          </label>
        </div>
        <p className="text-justify font-normal py-6">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="font-bold">privacy policy</span>.
        </p>
        <div className="flex justify-center items-center py-2">
          <PlaceOrderButton />
        </div>
      </div>
    </form>
  );
};

export default BillingDetails;
