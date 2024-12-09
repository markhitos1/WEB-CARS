import React, { useState } from "react";
import { FaMoon, FaSun, FaFilter, FaHome, FaPhone, FaMapMarkerAlt, FaCar, FaTachometerAlt, FaStar, FaChartLine } from "react-icons/fa";

const CarSalesPage = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [priceFilter, setPriceFilter] = useState("all");
  const [brandFilter, setBrandFilter] = useState("all");
  const [selectedCar, setSelectedCar] = useState(null);
  const [activeSection, setActiveSection] = useState("inicio");

  const carData = [
    {
      id: 1,
      brand: "Mercedes",
      model: "S-Class 2023",
      price: 110000,
      image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8",
      year: 2023,
      speed: "250 km/h",
      rating: 4.8,
      sales: 1200,
      features: ["Luxury Interior", "Advanced Safety", "Premium Sound System"]
    },
    {
      id: 2,
      brand: "BMW",
      model: "M5 Competition",
      price: 95000,
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e",
      year: 2023,
      speed: "305 km/h",
      rating: 4.9,
      sales: 980,
      features: ["Sport Package", "Carbon Fiber", "M Performance"]
    },
    {
      id: 3,
      brand: "Audi",
      model: "RS7 Sportback",
      price: 120000,
      image: "https://images.unsplash.com/photo-1614200187624-552e2c0c8856",
      year: 2023,
      speed: "290 km/h",
      rating: 4.7,
      sales: 850,
      features: ["Quattro AWD", "Virtual Cockpit", "Sport Suspension"]
    },
    {
      id: 4,
      brand: "Porsche",
      model: "911 GT3",
      price: 165000,
      image: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e",
      year: 2023,
      speed: "318 km/h",
      rating: 5.0,
      sales: 650,
      features: ["Track Ready", "PDK Transmission", "Aerodynamic Package"]
    }
  ];

  const filteredCars = carData.filter(car => {
    if (priceFilter === "all" && brandFilter === "all") return true;
    if (brandFilter !== "all" && car.brand !== brandFilter) return false;
    if (priceFilter === "under100k" && car.price >= 100000) return false;
    if (priceFilter === "over100k" && car.price < 100000) return false;
    return true;
  });

  const CarCard = ({ car }) => (
    <div className={`rounded-lg shadow-lg overflow-hidden ${darkMode ? "bg-gray-800" : "bg-white"}`}>
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1583121274602-3e2820c69888";
          }}
        />
      </div>
      <div className="p-4">
        <h3 className={`text-xl font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>
          {car.brand} {car.model}
        </h3>
        <p className={`text-sm mb-2 ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
          Year: {car.year}
        </p>
        <p className={`text-lg font-bold ${darkMode ? "text-green-400" : "text-green-600"}`}>
          ${car.price.toLocaleString()}
        </p>
        <button
          onClick={() => setSelectedCar(car)}
          className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200"
        >
          View Details
        </button>
      </div>
    </div>
  );

  const renderSection = () => {
    switch(activeSection) {
      case "inicio":
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        );
      case "contacto":
        return (
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p>Email: info@luxurycars.com</p>
            <p>Phone: +1 (212) 555-0123</p>
            <p>Hours: Monday - Saturday: 9:00 AM - 7:00 PM</p>
          </div>
        );
      case "ubicacion":
        return (
          <div className={`p-6 rounded-lg ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}>
            <h2 className="text-2xl font-bold mb-4">Our Location</h2>
            <p>123 Madison Avenue</p>
            <p>New York, NY 10016</p>
            <p>United States</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} transition-colors duration-200`}>
      <nav className={`${darkMode ? "bg-gray-800" : "bg-white"} shadow-lg mb-8`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-8">
              <button
                onClick={() => setActiveSection("inicio")}
                className={`flex items-center space-x-2 ${activeSection === "inicio" ? "text-blue-600" : darkMode ? "text-white" : "text-gray-800"}`}
              >
                <FaHome />
                <span>Inicio</span>
              </button>
              <button
                onClick={() => setActiveSection("contacto")}
                className={`flex items-center space-x-2 ${activeSection === "contacto" ? "text-blue-600" : darkMode ? "text-white" : "text-gray-800"}`}
              >
                <FaPhone />
                <span>Contacto</span>
              </button>
              <button
                onClick={() => setActiveSection("ubicacion")}
                className={`flex items-center space-x-2 ${activeSection === "ubicacion" ? "text-blue-600" : darkMode ? "text-white" : "text-gray-800"}`}
              >
                <FaMapMarkerAlt />
                <span>Ubicación</span>
              </button>
            </div>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full ${darkMode ? "bg-gray-700 text-yellow-400" : "bg-gray-100 text-gray-800"}`}
            >
              {darkMode ? <FaSun size={24} /> : <FaMoon size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
            Luxury Cars For Sale
          </h1>
        </div>

        {activeSection === "inicio" && (
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <FaFilter className={`mr-2 ${darkMode ? "text-white" : "text-gray-800"}`} />
              <select
                value={priceFilter}
                onChange={(e) => setPriceFilter(e.target.value)}
                className={`p-2 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              >
                <option value="all">All Prices</option>
                <option value="under100k">Under $100,000</option>
                <option value="over100k">Over $100,000</option>
              </select>
            </div>
            <div className="flex items-center">
              <FaFilter className={`mr-2 ${darkMode ? "text-white" : "text-gray-800"}`} />
              <select
                value={brandFilter}
                onChange={(e) => setBrandFilter(e.target.value)}
                className={`p-2 rounded-md ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"}`}
              >
                <option value="all">All Brands</option>
                <option value="Mercedes">Mercedes</option>
                <option value="BMW">BMW</option>
                <option value="Audi">Audi</option>
                <option value="Porsche">Porsche</option>
              </select>
            </div>
          </div>
        )}

        {renderSection()}

        {selectedCar && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className={`max-w-2xl w-full rounded-lg ${darkMode ? "bg-gray-800" : "bg-white"} p-6`}>
              <div className="flex justify-between items-start mb-4">
                <h2 className={`text-2xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>
                  {selectedCar.brand} {selectedCar.model}
                </h2>
                <button
                  onClick={() => setSelectedCar(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaTachometerAlt className="mr-2" />
                  <span>Max Speed: {selectedCar.speed}</span>
                </div>
                <div className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaStar className="mr-2 text-yellow-400" />
                  <span>Rating: {selectedCar.rating}/5.0</span>
                </div>
                <div className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaChartLine className="mr-2" />
                  <span>Sales: {selectedCar.sales} units</span>
                </div>
                <div className={`flex items-center ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  <FaCar className="mr-2" />
                  <span>Year: {selectedCar.year}</span>
                </div>
              </div>
              <div className="mt-4">
                <h3 className={`font-semibold mb-2 ${darkMode ? "text-white" : "text-gray-800"}`}>Key Features:</h3>
                <ul className={`list-disc list-inside ${darkMode ? "text-gray-300" : "text-gray-600"}`}>
                  {selectedCar.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarSalesPage;
