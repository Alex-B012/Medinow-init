const Icon = ({ src = "", alt = "", margin_top = "mt-0.5" }) => {
  return <img className={`icon w-5 h-5 ${margin_top}`} src={src} alt={alt} />;
};

export default Icon;
