import { db } from "@/database";
import { DonorService } from "@/service/donor/Donor.service";

export const DonorController = {
  async SearchDonor(req, res, next) {
    try {
      const { body, user } = req;

      const query: any = {
        country: body.country,
        blood_group: body.blood,
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
        photo: user?.photo || "no.png",
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
  async GetDonorById(req, res, next) {
    try {
      const { id } = req.body;
      const data = await db.Donor.findOne({
        where: {
          id: id,
        },
      });
      res.send(data);
    } catch (error) {
      next(error);
    }
  },
  async SearchDonorNearBy(req, res, next) {
    try {
      const { latitude, longitude, distance } = req.query;
      const data = await DonorService.SearchNearBy(
        latitude,
        longitude,
        distance
      );
      res.send(data);
    } catch (error) {
      next(error);
    }
  },
  async GetAllByAdmin(req, res, next) {
    try {
      const Data = await db.Donor.findAll();
      res.send(Data);
    } catch (error) {
      next(error);
    }
  },
  async addByAdmin(req, res, next) {
    try {
      const { admin, body } = req;
      const data = await db.Donor.create({
        name: body.name,
        address: body.address,
        blood_group: body.blood_group,
        country: body.country,
        district: body.district,
        division: body.division,
        phone: body.phone,
        upazila: body.upazila,
        status: "active",
        admin_id: admin.id,
      });
      res.send(data);
    } catch (error) {
      next(error);
    }
  },
};
