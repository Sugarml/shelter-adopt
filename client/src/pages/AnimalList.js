import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/animals")
      .then(res => res.json())
      .then(data => {
        console.log(data);  // <- 檢查每個 animal.image 是什麼
        setAnimals(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">可認養動物清單</h1>
      <div className="grid grid-cols-2 gap-4">
        {animals.map((animal) => (
          <Link
            to={`/animals/${animal._id}`}
            key={animal._id}
            className="border rounded p-2 shadow hover:shadow-lg transition"
          >
            <img
              src={animal.image}
              alt={animal.name}
              className="w-full h-32 object-cover rounded"
            />
            <h2 className="text-xl mt-2">{animal.name}</h2>
            <p>{animal.type} - {animal.age}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AnimalList;
