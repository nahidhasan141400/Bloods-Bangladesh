import { db } from "@/database";
import { DonorService } from "@/service/donor/Donor.service";

export const DonorController = {
  async SearchDonor(req, res, next) {
    try {
      const { body, user } = req;

      const query: any = {
        country: body.country,
      };

      if (body.division) {
        query.division = body.division;
      }

      if (body.district) {
        query.district = body.district;
      }

      if (body.upazila) {
        query.upazila = body.upazila;
      }

      const Data = await db.Donor.findAll({
        where: query,
      });

      res.send(Data);
    } catch (error) {
      next(error);
    }
  },
  async CreateDonor(req, res, next) {
    try {
      const { body, user } = req;

      const newData = await DonorService.CreateDonor({
        address: body.address,
        blood_group: body.blood_group,
        country: body.country,
        date_of_barth: body.date_of_barth,
        district: body.district,
        division: body.division,
        email: body.email,
        gender: body.gender,
        name: body.name,
        phone: body.phone,
        photo: user.photo || "no.png",
        upazila: body.upazila,
        user_id: user.id,
        latitude: body.latitude,
        longitude: body.longitude,
      });

      res.send(newData);
    } catch (error) {
      next(error);
    }
  },
};
