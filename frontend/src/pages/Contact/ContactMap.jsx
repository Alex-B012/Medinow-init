const ContactMap = () => {
  return (
    <div className="map-container w-full h-120 mt-3 md:h-160">
      <iframe
        className="md:hidden"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d756.1067771835553!2d-74.00751763881966!3d40.70861325753898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17fc652831%3A0x7fbba2850c7db39b!2s75%20John%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sru!4v1772033981740!5m2!1sen!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <iframe
        className="hidden md:block"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d378.0533885943171!2d-74.00719577370113!3d40.70861325709166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a17fc652831%3A0x7fbba2850c7db39b!2s75%20John%20St%2C%20New%20York%2C%20NY%2010038%2C%20USA!5e0!3m2!1sen!2sru!4v1772033714605!5m2!1sen!2sru"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
