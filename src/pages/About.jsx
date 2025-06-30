import Button from "../components/Button";

function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white p-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg mb-6">
          This is a simple React + Tailwind CSS application built as part of the PLP MERN-Stack Development program.
          It demonstrates reusable components, routing, and styling with utility classes.
        </p>
        <Button text="Contact Us" />
      </div>
    </div>
  );
}

export default About;
