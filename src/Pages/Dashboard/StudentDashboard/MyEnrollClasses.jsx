import { Helmet } from "react-helmet-async";
import Loader from "../../../Components/Loader";
import usePayment from "../../../Hooks/usePayment";
import img from "../../../assets/hero/hero.jpg";
import TopBanner from "../../../Components/TopBanner";

const MyEnrollClasses = () => {
  const [paymentHistory, loading] = usePayment();
  return (
    <>
      {loading ? (
        <Loader></Loader>
      ) : (
        <div>
          <Helmet>
            <title>My Enrolled Classes - Musiway School </title>
          </Helmet>
          <TopBanner img={img} title={"My Enrolled Classes"}></TopBanner>

          {paymentHistory.length > 0 ? (
            <div className="overflow-x-auto min-h-screen px-3 md:px-10 pb-10 my-10">
              <table className="table mt-5">
                {/* head */}
                <thead className="text-xl font-bold text-black">
                  <tr>
                    <th>#</th>
                    <th>Image</th>
                    <th>Class Name</th>
                    <th>Instructor Name</th>
                    <th>Email</th>
                    <th>Pay Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistory?.map((payment, i) => (
                    <tr key={payment._id}>
                      <th>{i + 1}</th>
                      <td>
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img src={payment.image} alt="" />
                          </div>
                        </div>
                      </td>
                      <td>{payment.className}</td>
                      <td>{payment.instructor}</td>
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

export default MyEnrollClasses;
