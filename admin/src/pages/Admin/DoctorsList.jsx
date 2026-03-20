import { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AppContext";
import AdminTitle from "./components/AdminTitle";
import AdminContent from "./components/AdminContent";

const DoctorsList = () => {
  const { doctors, aToken, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken, getAllDoctors]);

  return (
    <div className="doctors-list w-full min-h-screen pb-10 px-0 sm:px-6 lg:min-w-screen lg:bg-gray-100">
      <AdminTitle title={"All Doctors"} />
      <AdminContent>
        <div className="doctors-list__list w-full max-h-[80vh] py-6 flex flex-wrap justify-evenly gap-8 overflow-y-scroll lg:justify-start xl:gap-12 xl:px-6">
          {doctors.map((item) => (
            <div
              className="flex flex-col w-52 pb-2 text-center border border-indigo-200 rounded-xl  cursor-pointer transition-shadow duration-700 hover:shadow-xl"
              key={item._id}
            >
              <img
                className="w-52 h-71 rounded-t-xl"
                src={item.image}
                alt={item.name}
              />
              <p className="font-semibold pt-2 text-lg">{item.name}</p>
              <p className="text-gray-700">{item.specialty}</p>

              <div className="mt-2 flex px-3">
                <input
                  className="mr-2"
                  type="checkbox"
                  checked={item.available}
                  onChange={() => changeAvailability(item._id)}
                />
                <p
                  className={`${item.available ? "text-emerald-600" : ""} font-semibold`}
                >
                  Available
                </p>
              </div>
            </div>
          ))}
        </div>
      </AdminContent>
    </div>
  );
};

export default DoctorsList;
