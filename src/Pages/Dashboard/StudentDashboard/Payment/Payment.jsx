import { Helmet } from "react-helmet-async";
import TopBanner from "../../../../Components/TopBanner";
import img from "../../../../assets/Banner/payment.png";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import useMyclass from "../../../../Hooks/useMyclass";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
const Payment = () => {
  const { id } = useParams();
  const [myClasses] = useMyclass();
  const paymentClass = myClasses?.find((payClass) => payClass?._id === id);
  const price = paymentClass?.price;
  return (
    <div>
      <Helmet>
        <title>Payment - Musiway School </title>
      </Helmet>
      <TopBanner img={img} title={"Please Process Payment"}></TopBanner>
      <div className="md:w-2/4 min-h-screen mx-auto mt-32">
        <Elements stripe={stripePromise}>
          <CheckoutForm
            price={price}
            paymentClass={paymentClass}
          ></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
