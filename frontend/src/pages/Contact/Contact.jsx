import { Link } from "react-router-dom";
import { contact_data } from "../../data/data";
import { footer_links } from "../../data/links";

import TitleDescription from "../../components/Titles/TitleDescription";
import SectionTitle from "../../components/Titles/SectionTitle";
import ContactData from "../../components/ContactData";
import ContactMap from "./ContactMap";
import OfficeTimings from "./OfficeTimings";

const Contact = () => {
  const career_obj = footer_links.find((item) => item.name === "Career");

  return (
    <div className="contact w-full flex flex-col gap-6 items-center lg:pb-10">
      <TitleDescription title={"Contact Us"} case_class={"uppercase"} />
      <div className="contact__info flex flex-col items-center lg:flex-row lg:justify-center gap-8 w-full">
        <img
          className="w-101 rounded-xl"
          src={contact_data.img}
          alt={"Contact Us image"}
        />
        <div className="contact__data  min-w-70 max-w-101 p-3 pt-0 flex flex-col gap-1 md:w-101 md:h-fit md:min-h-101">
          <SectionTitle title={contact_data.office_data.title} />
          <ContactData
            line1={contact_data.office_data.address.line1}
            line2={contact_data.office_data.address.line2}
          />
          <ContactData phone={contact_data.phone} email={contact_data.email} />
          <div className="contact__career">
            <SectionTitle title={contact_data.careers.title} />
            <p className="contact__career-text pt-2">
              {contact_data.careers.text}
            </p>
          </div>
          <Link
            className="contact__career-btn w-fit mt-4 px-6 py-2 border text-gray-700 border-gray-300 hover:border-emerald-400 hover:bg-emerald-400 hover:text-white transition-colors duration-700"
            to={career_obj.path}
          >
            {contact_data.careers.btn_text}
          </Link>
        </div>
      </div>
      {contact_data.office_data.office_timings && (
        <OfficeTimings data={contact_data.office_data.office_timings} />
      )}
      <SectionTitle title={contact_data.office_data.location_title} />
      <ContactMap />
    </div>
  );
};

export default Contact;
