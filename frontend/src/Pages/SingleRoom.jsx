import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import {
  MapPin,
  Star,
  Calendar,
  Users,
  CheckCircle,
  XCircle,
  Phone,
  User,
  Wifi,
  Car,
  Coffee,
  Tv,
  Wind,
  Bath,
  Utensils,
  Mountain,
  Eye,
  Building,
  TreePine,
} from "lucide-react";

const SingleRoom = () => {
  const { id } = useParams();
  const { roomData } = useContext(AppContext);

  const room = roomData.find((r) => r._id === id);

  const getAmenityIcon = (amenity) => {
    const iconMap = {
      "Ocean View": Eye,
      "Mountain View": Mountain,
      "City View": Building,
      "Garden View": TreePine,
      Balcony: Building,
      "Mini Bar": Coffee,
      "Room Service": Utensils,
      "Free WiFi": Wifi,
      "Premium WiFi": Wifi,
      "Work Desk": Building,
      "Concierge Service": User,
      "Breakfast Included": Coffee,
      Parking: Car,
      "Smart TV": Tv,
      "Spa Access": Bath,
      "Pool Access": Bath,
      Kitchen: Utensils,
      "Living Area": Building,
      "Private Terrace": Building,
      "Butler Service": User,
      Jacuzzi: Bath,
      "Panoramic View": Eye,
    };
  };

  return (
    <div className="py-24 min-h-screen by-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1">
              <h1 className="text-4xl font-bold text-gray-800">
                {room ? room.roomType : "Room not found"}
              </h1>
              <div className="flex items-center gap-2 text-gray-600 mb-4">
                <MapPin className="w-5 h-5" />
                <span>{room ? room.hotel.address : "Room not found"}</span>
              </div>
              <div className="flex items-center gap-4 ">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span>{room ? room.hotel.rating : "Room not found"}</span>
                </div>
                <div
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${room.isAvailable ? "bg-green-100 text-gray-700" : "bg-red-100 text-red-700"}`}
                >
                  {room.isAvailable ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Available
                    </>
                  ) : (
                    <>
                      <XCircle className="w-4 h-4" /> Not available
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="text-right">
              <div className="text-3xl font-bold text-green-600 mb-2">
                ${room.pricePerNight}
                <span>/night</span>
              </div>
              <div className="text-gray-600">
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{room.hotel.ownerName}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  <span>{room.hotel.contactNumber}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleRoom;
