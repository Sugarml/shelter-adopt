import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const AnimalDetail = () => {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/animals/${id}`)
      .then(res => res.json())
      .then(data => {
        setAnimal(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("API fetch error:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!animal) return <p>動物不存在</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{animal.name}</h1>
      <img src={animal.image} alt={animal.name} className="w-full h-64 object-cover rounded" />
      <p className="mt-2">{animal.type} - {animal.age}</p>
      <p className="mt-2">{animal.description}</p>
    </div>
  );
};

export default AnimalDetail;
