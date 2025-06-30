import Card from "../components/Card";

function Home() {
  const cardData = [
    {
      title: "Welcome to PLP",
      description: "This platform helps you become a skilled MERN-stack developer.",
    },
    {
      title: "Learn React",
      description: "Build modern UIs using reusable components and hooks.",
    },
    {
      title: "Tailwind CSS",
      description: "Style your app rapidly with utility-first classes.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Home Page</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <Card key={index} title={card.title} description={card.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
