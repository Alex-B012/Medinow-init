const ContactData = ({
  line1 = "",
  line2 = "",
  phone = "",
  email = "",
  margin = "",
}) => {
  return (
    <div className="contact-data w-full py-3 flex flex-col">
      {line1 && <p>{line1}</p>}
      {line2 && <p>{line2}</p>}
      {phone && (
        <a className={`hover:text-emerald-400 ${margin}`} href={`tel:${phone}`}>
          {phone}
        </a>
      )}
      {email && (
        <a
          className={`hover:text-emerald-400 ${margin}`}
          href={`mailto:${email}`}
        >
          {email}
        </a>
      )}
    </div>
  );
};

export default ContactData;
