import blue from "../assets/blue man.png";
import dark from "../assets/dark man.jpg";
import t from "../assets/tears.png";

export default function Contact() {
  // Data array to keep the JSX clean
  const cats = [1, 2, 3, 4];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="bg-red-500 text-rose-100 text-center p-2 mb-10 rounded shadow-sm">
        Cat Contacts Directory
      </h1>

      {/* The Grid: 4 columns in a row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {cats.map((cat) => (
          <article 
            key={cat} 
            className="bg-white p-5 rounded-2xl shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
          >
            {/* Main Image */}
            <div className="overflow-hidden rounded-lg mb-5">
              <img
                src={blue}
                alt="Mr. Whiskerson"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            
            {/* Title */}
            <h3 className="text-xl font-extrabold mb-5 text-gray-900">
              Mr. Whiskerson
            </h3>
            
            {/* Contact Info Rows */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src={t} alt="phone" className="w-4 h-4" />
                <p className="text-sm text-gray-600 font-medium">(212) 555-1234</p>
              </div>
              
              <div className="flex items-center gap-3">
                <img src={dark} alt="email" className="w-4 h-4" />
                <p className="text-sm text-gray-600 font-medium truncate">
                  mr.whiskaz@catnap.meow
                </p>
              </div>
            </div>
          </article>
        ))}

      </div>
    </div>
  );
}