const TopBanner = ({ img, title }) => {
  return (
    <div
      className="hero h-64 w-full"
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="hero-overlay bg-opacity-60 bg-black"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-lg">
          <h1 className="mb-5 text-2xl md:text-4xl font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
