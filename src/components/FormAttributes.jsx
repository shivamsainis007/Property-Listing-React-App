// src/components/FormAttributes.jsx
import { useNavigate } from "react-router-dom";
import Post from "./Post";
import React, { useState } from "react";

const FormAttributes = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    type: "",
    bhk: "",
    bathrooms: "",
    furnishing: "",
    status: "",
    listedBy: "",
    superBuiltup: "",
    carpetArea: "",
    maintenance: "",
    totalFloors: "",
    floorNo: "",
    carParking: "",
    facing: "",
    projectName: "",
    adTitle: "",
    description: "",
    price: "",
    state: "",
    name: "",
    phone: "",
  });

  const handleSelect = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6 mt-6 space-y-4">
      {/* Post Your Ad Heading and Category Box */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">POST YOUR AD</h1>
      </div>

      <div className="border rounded-md p-4 mb-6">
        <p className="font-semibold text-sm mb-1">SELECTED CATEGORY</p>
        <div className="text-sm text-gray-700 flex items-center justify-between flex-wrap">
          <span>Properties / For Sale: Houses & Apartments</span>
          <button
            className="text-blue-600 text-sm underline ml-2"
            onClick={() => {console.log("Change clicked");
            navigate("/")}}
          >
            Change
          </button>
        </div>
      </div>

      <h2 className="text-xl font-semibold">Include Some Details</h2>

      {/* Type */}
      <div>
        <p className="mb-2 font-medium">Type *</p>
        <div className="flex flex-wrap gap-2">
          {[
            "Flats / Apartments",
            "Independent / Builder Floors",
            "Farm House",
            "House & Villa",
          ].map((type) => (
            <button
              key={type}
              onClick={() => handleSelect("type", type)}
              className={`px-4 py-2 border rounded ${
                formData.type === type
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* BHK */}
      <div>
        <p className="mb-2 font-medium">BHK</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, "4+"].map((bhk) => (
            <button
              key={bhk}
              onClick={() => handleSelect("bhk", bhk)}
              className={`px-4 py-2 border rounded ${
                formData.bhk === bhk ? "bg-blue-500 text-white" : "bg-gray-100"
              }`}
            >
              {bhk}
            </button>
          ))}
        </div>
      </div>

      {/* Bathrooms */}
      <div>
        <p className="mb-2 font-medium">Bathrooms</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, "4+"].map((bath) => (
            <button
              key={bath}
              onClick={() => handleSelect("bathrooms", bath)}
              className={`px-4 py-2 border rounded ${
                formData.bathrooms === bath
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {bath}
            </button>
          ))}
        </div>
      </div>

      {/* Furnishing */}
      <div>
        <p className="mb-2 font-medium">Furnishing</p>
        <div className="flex gap-2">
          {["Furnished", "Semi-Furnished", "Unfurnished"].map((item) => (
            <button
              key={item}
              onClick={() => handleSelect("furnishing", item)}
              className={`px-4 py-2 border rounded ${
                formData.furnishing === item
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Project Status */}
      <div>
        <p className="mb-2 font-medium">Project Status</p>
        <div className="flex gap-2">
          {["New Launch", "Ready to Move", "Under Construction"].map(
            (status) => (
              <button
                key={status}
                onClick={() => handleSelect("status", status)}
                className={`px-4 py-2 border rounded ${
                  formData.status === status
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100"
                }`}
              >
                {status}
              </button>
            )
          )}
        </div>
      </div>

      {/* Listed By */}
      <div>
        <p className="mb-2 font-medium">Listed By</p>
        <div className="flex gap-2">
          {["Builder", "Dealer", "Owner"].map((option) => (
            <button
              key={option}
              onClick={() => handleSelect("listedBy", option)}
              className={`px-4 py-2 border rounded ${
                formData.listedBy === option
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Input Fields */}
      <div className="grid grid-cols-1 gap-4">
        {[
          ["superBuiltup", "Super Builtup area sqft *"],
          ["carpetArea", "Carpet Area sqft *"],
          ["maintenance", "Maintenance (Monthly)"],
          ["totalFloors", "Total Floors"],
          ["floorNo", "Floor No"],
          ["projectName", "Project Name"],
        ].map(([field, label]) => (
          <input
            key={field}
            type="text"
            placeholder={label}
            className="border rounded px-4 py-2 w-full"
            value={formData[field]}
            onChange={(e) =>
              setFormData({ ...formData, [field]: e.target.value })
            }
          />
        ))}
      </div>

      {/* Car Parking */}
      <div>
        <p className="mb-2 font-medium">Car Parking</p>
        <div className="flex gap-2">
          {["0", "1", "2", "3", "3+"].map((num) => (
            <button
              key={num}
              onClick={() => handleSelect("carParking", num)}
              className={`px-4 py-2 border rounded ${
                formData.carParking === num
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      </div>

      {/* Facing */}
      <div>
        <p className="mb-2 font-medium">Facing</p>
        <select
          value={formData.facing}
          onChange={(e) => setFormData({ ...formData, facing: e.target.value })}
          className="w-full border px-4 py-2 rounded"
        >
          <option value="">Select Facing</option>
          <option value="East">East</option>
          <option value="West">West</option>
          <option value="North">North</option>
          <option value="South">South</option>
        </select>
      </div>
      {/* Project name */}
      <div>
        <p className="mb-2 font-medium">projectName *</p>
        <input
          type="text"
          placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
          className="border rounded px-4 py-2 w-full"
          maxLength={70}
          value={formData.adTitle || ""}
          onChange={(e) =>
            setFormData({ ...formData, adTitle: e.target.value })
          }
        />
        <p className="text-sm text-gray-500 text-right">
          {(formData.adTitle || "").length}/70
        </p>
      </div>

      {/* Ad Title */}
      <div>
        <p className="mb-2 font-medium">Ad title *</p>
        <input
          type="text"
          placeholder="Mention the key features of your item (e.g. brand, model, age, type)"
          className="border rounded px-4 py-2 w-full"
          maxLength={70}
          value={formData.adTitle || ""}
          onChange={(e) =>
            setFormData({ ...formData, adTitle: e.target.value })
          }
        />
        <p className="text-sm text-gray-500 text-right">
          {(formData.adTitle || "").length}/70
        </p>
      </div>

      {/* Description */}
      <div>
        <p className="mb-2 font-medium">Description *</p>
        <textarea
          placeholder="Please enter the details (minimum 10 characters)"
          className="border rounded px-4 py-2 w-full"
          minLength={10}
          maxLength={4096}
          value={formData.description || ""}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
        <p className="text-sm text-gray-500 text-right">
          {(formData.description || "").length}/4096
        </p>
      </div>

      {/* Price */}
      <div>
        <p className="mb-2 font-medium">Price *</p>
        <input
          type="number"
          placeholder="₹"
          className="border rounded px-4 py-2 w-full"
          value={formData.price || ""}
          onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        />
      </div>

      {/* Upload Photos */}
      <div>
        <p className="mb-2 font-medium">Upload up to 20 photos</p>
        <div className="grid grid-cols-5 gap-2">
          {[...Array(20)].map((_, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center border-2 border-dashed rounded w-24 h-24"
            >
              <label className="cursor-pointer flex flex-col items-center justify-center text-sm text-gray-500">
                <span className="material-icons">add_a_photo</span>
                <span>Add Photo</span>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => {
                    // Handle file uploads here
                    const file = e.target.files[0];
                    console.log(`Photo ${idx + 1} uploaded`, file);
                  }}
                />
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Confirm Your Location */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Confirm Your Location</h2>

        {/* Tabs - static for now */}
        <div className="flex border-b mb-4">
          <button className="px-4 py-2 font-medium text-blue-600 border-b-2 border-blue-600">
            LIST
          </button>
          <button className="px-4 py-2 text-gray-500">CURRENT LOCATION</button>
        </div>

        {/* State Dropdown */}
        <label className="block mb-2 font-medium">State *</label>
        <select
          className="w-full border px-4 py-2 rounded"
          value={formData.state}
          onChange={(e) => setFormData({ ...formData, state: e.target.value })}
        >
          <option value="">Select a State</option>
          <option value="Uttar Pradesh">Uttar Pradesh</option>
          <option value="Delhi">Delhi</option>
          <option value="Haryana">Haryana</option>
          <option value="Maharashtra">Maharashtra</option>
          {/* Add more as needed */}
        </select>
        {formData.state === "" && (
          <p className="text-red-500 text-sm mt-1">This field is mandatory</p>
        )}
      </div>

      {/* Review Your Details */}
      <div className="mt-8 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Review Your Details</h2>

        {/* Profile Image */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border">
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name Field */}
          <div className="flex-1">
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="border px-4 py-2 rounded w-full"
              maxLength={30}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <p className="text-sm text-gray-500 text-right">
              {formData.name.length}/30
            </p>
          </div>
        </div>

        {/* Mobile Verification */}
        <div>
          <p className="mb-2 font-medium">Let's verify your account</p>
          <p className="text-sm text-gray-600 mb-2">
            We will send you a confirmation code by SMS on the next step.
          </p>
          <label className="block mb-1 font-medium">
            Mobile Phone Number *
          </label>
          <div className="flex">
            <span className="px-4 py-2 border border-r-0 rounded-l bg-gray-100">
              +91
            </span>
            <input
              type="tel"
              className="border px-4 py-2 w-full rounded-r"
              placeholder="Enter mobile number"
              maxLength={10}
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />
          </div>
        </div>
      </div>
      {/* Post Now Button */}
      <div className="mt-6 text-right">
        <button
          className={`px-6 py-2 rounded text-white ${
            formData.name && formData.phone && formData.state
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={!(formData.name && formData.phone && formData.state)}
          onClick={() => {
            if (formData.name && formData.phone && formData.state) {
              // 🔄 Replace this with your form submit logic
              console.log("Form Submitted:", formData);
              alert("Form submitted successfully!");
            }
          }}
        >
          Post now
        </button>
      </div>
    </div>
  );
};

export default FormAttributes;
