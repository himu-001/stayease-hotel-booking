import { useContext } from "react";
import { useState } from "react";
import { AppContext } from "../../Context/AppContext";
import { toast } from "react-hot-toast";

const RegisterHotel = () => {

  const { axios, navigate } = useContext(AppContext);

  const [data, setData] = useState({
    hotelName: "",
    hotelAddress: "",
    rating: "",
    price: "",
    amenities: [],
    image: [],
  });

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };


  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
      setData({ ...data, image: selectedFile });

      const imageURL = URL.createObjectURL(selectedFile);
      setPreview(imageURL);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("hotelName", data.hotelName);
    formData.append("hotelAddress", data.hotelAddress);
    formData.append("rating", data.rating);
    formData.append("price", data.price);
    formData.append("amenities", data.amenities);
    formData.append("image", file);

    console.log(data);

    try {
      const { data } = await axios.post("/api/hotel/register", formData);
      
      if (data.success) {
        toast.success(data.message);
        navigate("/owner");
      }
      else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
    
  }

  return (
    <div className="py-10 flex flex-col justify-between bg-white">
      <form onSubmit={handleSubmit} className="md:p-10 p-4 space-y-5 max-w-lg">
        <div>
          <p className="text-base font-medium">Hotel Image</p>
          <div className="w-full my-4">
            {/* Hotel Image Preview */}

            {preview && (
              <div className="mb-3 flex justify-center">
                <img
                  src={preview}
                  alt=""
                  className="w-24 h-24 object-cover rounded shadow"
                />
              </div>
            )}

            {/* File Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="hotelName">
            Hotel Name
          </label>
          <input
            id="hotelName"
            name="hotelName"
            value={data.hotelName}
            onChange={handleChange}
            type="text"
            placeholder="Type here"
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
            required
          />
        </div>

        <div className="flex flex-col gap-1 max-w-md">
          <label className="text-base font-medium" htmlFor="hotelAddress">
            Hotel Address
          </label>
          <textarea
            id="hotelAddress"
            name="hotelAddress"
            value={data.hotelAddress}
            onChange={handleChange}
            rows={4}
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="rating">
              Rating
            </label>
            <input
              id="rating"
              type="number"
              name="rating"
              value={data.rating}
              onChange={handleChange}
              placeholder="0"
              min="0"
              max="5"
              step="0.1"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex-1 flex flex-col gap-1 w-32">
            <label className="text-base font-medium" htmlFor="price">
              Price
            </label>
            <input
              id="price"
              type="number"
              name="price"
              value={data.price}
              onChange={handleChange}
              placeholder="0"
              min="0"
              className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40"
              required
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-1">
          <label className="text-base font-medium" htmlFor="amenities">
            Hotel Amenities
          </label>
          <textarea
            id="amenities"
            name="amenities"
            value={data.amenities.join(", ")}
            onChange={(e) =>
              setData({
                ...data,
                amenities: e.target.value.split(",").map((item) => item.trim()),
              })
            }
            className="outline-none md:py-2.5 py-2 px-3 rounded border border-gray-500/40 resize-none"
            placeholder="Type here"
          ></textarea>
        </div>

        <button
          type="submit"
          className="px-8 py-2.5 bg-primary text-white font-medium rounded"
        >
          Register Hotel
        </button>
      </form>
    </div>
  );
};

export default RegisterHotel;
