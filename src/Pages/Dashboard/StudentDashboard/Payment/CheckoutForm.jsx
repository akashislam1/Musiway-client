import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ price, paymentClass }) => {
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const [cardError, setCardError] = useState(" ");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((res) => {
        setClientSecret(res.data.clientSecret);
      });
    }
  }, [axiosSecure, price]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      setCardError("");
      // console.log(paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || "unknown",
            email: user?.email || "unknown",
          },
        },
      });
    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);
    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        date: new Date(),
        transactionId: paymentIntent.id,
        price: paymentClass.price,
        image: paymentClass.image,
        className: paymentClass.title,
        classId: paymentClass._id,
        selectedClassId: paymentClass.classId,
        instructor: paymentClass.instructor,
        enrolled: paymentIntent.status,
      };
      axiosSecure.post("/payments", payment).then((res) => {
        if (res.data.insertedId) {
          console.log("Payment was successfully", res.data);
          return navigate("/paymentHistory");
        }
      });
    }
  };
  return (
    <>
      {transactionId && (
        <p className="text-center text-green-600 my-5">
          Transaction completed by ID : {transactionId}
        </p>
      )}
      {cardError && (
        <p className="text-center text-red-600 my-5">{cardError}</p>
      )}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                textAlign: "center",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn normal-case my-5 hover:bg-black btn-sm text-white bg-[#cc9724]"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
    </>
  );
};

export default CheckoutForm;
