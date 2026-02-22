function ErrorText({ data }) {
  return (
    <div className="error-text w-full p-5 pt-0 flex flex-col items-start justify-center ">
      <h2 className="error-text__title w-full text-2xl font-extrabold uppercase mb-5 text-center text-green-300">
        {data.title}
      </h2>
      <h3 className="error-text__subtitle w-full font-medium mb-5 text-center">
        {data.subtitle}
      </h3>
      <p className="error-text__message w-full py-5 text-center">
        {data.message}
      </p>
    </div>
  );
}

export default ErrorText;
