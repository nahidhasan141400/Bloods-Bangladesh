import { db } from "@/database";
import { Sequelize } from "sequelize";

export const DonorService = {
  async CreateDonor(data: {
    blood_group: "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "O-" | "AB-";
    gender: "male" | "female" | "others";
    address: string;
    date_of_barth: string;
    user_id?: string;
    organization_id?: string;
    upazila: string;
    photo: string;
    latitude: string;
    longitude: string;
    division: string;
    phone: string;
    email: string;
    district: string;
    country: string;
    name: string;
  }) {
    try {
      const NewDonorData = await db.Donor.create({
        name: data.name,
        email: data.email,
        phone: data.phone,
        country: data.country,
        district: data.district,
        division: data.division,
        upazila: data.upazila,
        latitude: data.latitude,
        longitude: data.longitude,
        date_of_barth: data.date_of_barth,
        photo: data.photo,
        status: "active",
        user_id: data.user_id,
        organization_id: data.organization_id,
        address: data.address,
        gender: data.gender,
        blood_group: data.blood_group,
        coordinates:
          data.latitude && data.longitude
            ? {
                type: "Point",
                coordinates: [data.latitude, data.longitude],
              }
            : null,
      });
      return NewDonorData;
    } catch (error) {
      throw error;
    }
  },
  async SearchNearBy(lat, lon, distanceInKm) {
    try {
      const radius = distanceInKm * 1000; // Convert km to meters
      const nearbyLocations = await db.sequelize.query(
        `SELECT *, ST_Distance_Sphere(POINT(longitude, latitude), POINT(:lon, :lat)) AS distance
          FROM donors
          HAVING distance <= :radius`,
        {
          replacements: { lat, lon, radius }, // Replacements for lat, lon, and radius
          model: db.Donor, // Sequelize model to map the result
          mapToModel: true, // Maps raw results to model instances
        }
      );

      return nearbyLocations;
    } catch (error) {
      throw error;
    }
  },
};
