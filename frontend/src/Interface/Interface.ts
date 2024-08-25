export interface AddDonorFromI {
  name: string;
  email: string;
  phone: string;
  date_of_barth: string;
  gender: "male" | "female" | "others";
  blood_group: "A+" | "B+" | "O+" | "AB+" | "A-" | "B-" | "O-" | "AB-";
  photo: string;
  country: string;
  division: string;
  district: string;
  upazila: string;
  longitude: string;
  latitude: string;
  address: string;
}
