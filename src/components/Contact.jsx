import blue from "../assets/blue man.png";
import dark from "../assets/dark man.jpg";
import t from "../assets/tears.png";
import Entry from "./Entry";

export default function Contact() {

  const cats = [
    {
      id: 1,
      name: "Mr. Whiskerson",
      img: blue,
      phone: "(212) 555-1234",
      email: "mr.whiskaz@catnap.meow"
    },
    {
      id: 2,
      name: "Fluffy",
      img: blue,
      phone: "(212) 555-5678",
      email: "fluffy@catmail.meow"
    },
    {
      id: 3,
      name: "Mittens",
      img: blue,
      phone: "(212) 555-9999",
      email: "mittens@kitty.meow"
    },
    {
      id: 4,
      name: "Snowball",
      img: blue,
      phone: "(212) 555-7777",
      email: "snowball@catworld.meow"
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="bg-red-500 text-rose-100 text-center p-2 mb-10 rounded shadow-sm">
        Cat Contacts Directory
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        
        {cats.map((cat) => (
          <Entry
            key={cat.id}
            img={cat.img}
            name={cat.name}
            phone={cat.phone}
            email={cat.email}
            phoneIcon={t}
            emailIcon={dark}
          />
        ))}

      </div>
    </div>
  );
}
