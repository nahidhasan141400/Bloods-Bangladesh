import { db } from "@/database";

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
};
