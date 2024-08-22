import { db } from "@/database";

export const AddressController = {
  async AddCountry(req, res, next) {
    try {
      const { country, code } = req.body;
      const newCountry = await db.Country.create({
        code,
        name: country,
      });
      res.send(newCountry);
    } catch (error) {
      next(error);
    }
  },
  async GetAllCountry(req, res, next) {
    try {
      const Data = await db.Country.findAll({
        where: {
          status: "active",
        },
        include: [
          {
            model: db.Division,
            as: "division",
            where: {
              status: "active",
            },
            include: [
              {
                model: db.District,
                as: "district",
                where: {
                  status: "active",
                },
                include: [
                  {
                    model: db.Upazila,
                    as: "Upazila",
                    where: {
                      status: "active",
                    },
                  },
                ],
              },
            ],
          },
        ],
      });
      res.send(Data);
    } catch (error) {
      next(error);
    }
  },
};
