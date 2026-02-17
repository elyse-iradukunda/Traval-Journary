export default function Entry(props) {
  return (
    <article 
      className="bg-white p-5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
    >
      <div className="overflow-hidden rounded-lg mb-5">
        <img
          src={props.img}
          alt={props.name}
          className="w-full aspect-[4/3] object-cover"
        />
      </div>
      
      <h3 className="text-xl font-extrabold mb-5 text-gray-900">
        {props.name}
      </h3>
      
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <img src={props.phoneIcon} alt="phone" className="w-4 h-4" />
          <p className="text-sm text-gray-600 font-medium">
            {props.phone}
          </p>
        </div>
        
        <div className="flex items-center gap-3">
          <img src={props.emailIcon} alt="email" className="w-4 h-4" />
          <p className="text-sm text-gray-600 font-medium truncate">
            {props.email}
          </p>
        </div>
      </div>
    </article>
  );
}
