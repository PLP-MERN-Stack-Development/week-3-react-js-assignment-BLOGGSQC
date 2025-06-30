function Card({ title, description, imageUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden max-w-sm mx-auto">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
}

export default Card;
