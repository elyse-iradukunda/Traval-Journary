export default function Entry({ img, title, country, googleMapsLink, dates, text }) {
  return (
    <article 
      className="flex gap-6 bg-white p-5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)]  border border-gray-100"
    >
      
      <div className="w-40 h-56  overflow-hidden rounded-lg">
        <img
          src={img.src}
          alt={img.alt}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="flex flex-col">
        
        <div className="flex items-center gap-3 text-sm">
          <span className="text-red-500 font-semibold uppercase tracking-widest">
            {country}
          </span>

          <a
            href={googleMapsLink}
            target="_blank"
            className="text-gray-500 underline"
          >
            View on Google Maps
          </a>
        </div>

        <h2 className="text-2xl font-bold mt-2 text-gray-900">
          {title}
        </h2>

        <p className="font-semibold mt-3">
          {dates}
        </p>

        <p className="mt-3 text-gray-700 ">
          {text}
        </p>

      </div>
    </article>
  );
}
