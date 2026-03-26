import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../context/AppContext";
import axios from "axios";

import { toast } from "react-toastify";
import { getAppointmentDateAndTime } from "../../utils/appointment";
import { displayErrorMessage, getUrlByName } from "../../utils/utils";
import { auth_links } from "../../data/links";

import TitleDescription from "../../components/Titles/TitleDescription";
import Loading from "../../components/Loading";

const NO_APPOINTMENTS = "No appointments found";

const MyAppointments = () => {
  const { backendUrl, token, USER_API } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [cancelLoading, setCancelLoading] = useState(null);

  useEffect(() => {
    if (!token) return;

    const fetchAppointments = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(
          `${backendUrl}${USER_API}/appointments`,
          {
            headers: { token },
          },
        );

        if (data.success) {
          setAppointments([...data.appointments].reverse());
        }
      } catch (error) {
        displayErrorMessage(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, [token, backendUrl]);

  const getUserAppointments = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post(
        `${backendUrl}/api/user/appointments`,
        {},
        {
          headers: { token },
        },
      );

      if (data.success) {
        setAppointments([...data.appointments].reverse());
      }
    } catch (error) {
      displayErrorMessage(error);
    } finally {
      setLoading(false);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      setCancelLoading(appointmentId);
      const { data } = await axios.post(
        `${backendUrl}/api/user/cancel-appointment`,
        { appointmentId },
        {
          headers: { token },
        },
      );

      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      displayErrorMessage(error);
    } finally {
      setCancelLoading(null);
    }
  };

  const initPay = (order) => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: "Appointment Payment",
      description: "Appointment Payment Description",
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log("response:", response);

        try {
          const { data } = await axios.post(
            backendUrl + "/api/user/verify-razorpay",
            response,
            { headers: { token } },
          );

          if (data.success) {
            getUserAppointments();
            navigate(getUrlByName("My Appointments", auth_links));
          }
        } catch (error) {
          displayErrorMessage(error);
        }
      },
    };
    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const appointmentRazorpay = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/payment-razorpay",
        { appointmentId },
        { headers: token },
      );

      if (data.success) initPay(data.order);
    } catch (error) {
      displayErrorMessage(error);
    }
  };

  return (
    <div className="my-appointments w-full pb-10 flex flex-col gap-6">
      <TitleDescription title={"My Appointments"} case_class={"uppercase"} />
      <p className="my-appointments__text pb-3 font-medium text-zinc-600 border-b border-gray-300  ">
        My Appointment
      </p>
      {loading ? (
        <Loading />
      ) : appointments.length === 0 ? (
        <Loading text={NO_APPOINTMENTS} />
      ) : (
        appointments.map((item) => (
          <div
            className="my-appointments__card pb-8 py-2 flex flex-col items-center gap-8 border-b border-gray-300 sm:flex-row sm:items-start"
            key={item._id}
          >
            <img
              className="my-appointments__img w-40 h-56"
              src={item.docData?.image}
              alt={item.docData?.name}
            />

            <div className="my-appointments__doctor-info flex flex-col gap-6 text-sm text-zinc-600">
              <div>
                {item.docData.name && (
                  <p className="text-neutral-800 font-semibold text-lg">
                    {item.docData.name}
                  </p>
                )}

                {item.docData.specialty && <p>{item.docData.specialty}</p>}
              </div>

              <div>
                <p className="text-zinc-700 font-semibold mb-1">Address:</p>
                <p className="">{item.docData.address.line1}</p>
                <p className="">{item.docData.address.line2}</p>
              </div>

              <p>
                <span className="text-zinc-700 font-semibold mr-2 flex w-fit">
                  Date & Time:
                </span>

                {item.slotDate && item.slotTime && (
                  <span>
                    {getAppointmentDateAndTime(item.slotDate, item.slotTime)}
                  </span>
                )}
              </p>
            </div>
            <div className="m-auto"></div>

            {item.isCompleted ? (
              <div className="text-emerald-400 flex gap-6 justify-end sm:h-56 sm:flex-col sm:text-end">
                Appointment Completed
              </div>
            ) : !item.cancelled ? (
              <div className=" flex gap-6 justify-end sm:h-56 sm:flex-col">
                {item.payment ? (
                  <button className="px-2 py-1 bg-emerald-50 text-stone-500 text-center border rounded  min-[400px]:py-2 min-[400px]:px-4">
                    Paid
                  </button>
                ) : (
                  <button
                    className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-emerald-400 hover:bg-emerald-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4"
                    onClick={() => appointmentRazorpay(item._id)}
                  >
                    Pay Online
                  </button>
                )}

                <button
                  className="px-2 py-1 text-stone-500 text-center border rounded cursor-pointer hover:border-red-400 hover:bg-red-400 hover:text-white transition-colors duration-700 min-[400px]:py-2 min-[400px]:px-4"
                  onClick={() => cancelAppointment(item._id)}
                  disabled={cancelLoading === item._id}
                >
                  {cancelLoading === item._id
                    ? "Cancelling..."
                    : "Cancel appointment"}
                </button>
              </div>
            ) : (
              <div className="text-red-400 flex gap-6 justify-end sm:h-56 sm:flex-col sm:text-end">
                Appointment Cancelled
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default MyAppointments;
