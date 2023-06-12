import Loader from "../../../Components/Loader";
import img from "../../../assets/hero/hero.jpg";
import { Helmet } from "react-helmet-async";
import TopBanner from "../../../Components/TopBanner";
import usePayment from "../../../Hooks/usePayment";

const PaymentHistory = () => {
  const [paymentHistory, loading] = usePayment();

  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>Payment History - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"Payment History"}></TopBanner>

          {paymentHistory.length > 0 ? (
            <div className="overflow-x-auto min-h-screen px-3 md:px-10 pb-10 my-10">
              <table className="table mt-5">
                {/* head */}
                <thead className="text-xl font-bold text-black">
                  <tr>
                    <th>#</th>
                    <th>Transaction Id </th>
                    <th>Class Name</th>
                    <th>Email</th>
                    <th>Pay Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory?.map((payment, i) => (
                    <tr key={payment._id}>
                      <th>{i + 1}</th>
                      <td>{payment.transactionId}</td>
                      <td>{payment.className}</td>
                      <td>{payment.email}</td>
                      <td>${payment.price}</td>
                      <td>{payment.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="text-center my-10 text-3xl font-bold text-black">
              <p>No History Available</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PaymentHistory;
