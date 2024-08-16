import { db } from "@/database";

export const DonorService = {
  async CreateDonor(data: {
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
        photo: data.photo,
        status: "active",
        user_id: data.user_id,
        organization_id: data.organization_id,
      });
      return NewDonorData;
    } catch (error) {
      throw error;
    }
  },
};
