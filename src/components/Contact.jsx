import blue from "../assets/blue man.png";
import dark from "../assets/dark man.jpg";
import t from "../assets/tears.png";
import Entry from "./Entry";

export default function Contact() {

  const entries = [
    {
      id: 1,
      title: "Mount Fuji",
      country: "Japan",
      googleMapsLink: "https://www.google.com/maps",
      dates: "12 Jan, 2021 - 24 Jan, 2021",
      text: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet).",
      img: {
        src: blue,
        alt: "Mount Fuji"
      }
    },
    {
      id: 2,
      title: "Sahara Desert",
      country: "Morocco",
      googleMapsLink: "https://www.google.com/maps",
      dates: "05 Feb, 2022 - 15 Feb, 2022",
      text: "The Sahara is the largest hot desert in the world.",
      img: {
        src: dark,
        alt: "Sahara Desert"
      }
    },
    {
      id: 3,
      title: "Niagara Falls",
      country: "USA",
      googleMapsLink: "https://www.google.com/maps",
      dates: "10 Mar, 2023 - 20 Mar, 2023",
      text: "Niagara Falls is famous for its powerful waterfalls.",
      img: {
        src: t,
        alt: "Niagara Falls"
      }
    },
    {
      id: 4,
      title: "Eiffel Tower",
      country: "France",
      googleMapsLink: "https://www.google.com/maps",
      dates: "01 Apr, 2024 - 10 Apr, 2024",
      text: "The Eiffel Tower is one of the most famous landmarks in the world.",
      img: {
        src: dark,
        alt: "Eiffel Tower"
      }
    }
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <div className="flex flex-col gap-10 max-w-4xl mx-auto">
        {entries.map((entry) => (
          <Entry
            key={entry.id}
            {...entry}
          />
        ))}
      </div>
    </div>
  );
}
