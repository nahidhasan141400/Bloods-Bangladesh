import { proxy } from "../proxy";

// const proxy = 'http://192.168.111.220:5000/'

export const imagePath = {
  profile: (url: string | null) => {
    if (!url) {
      return null;
    }
    const Checker = /^https?:\/\//i.test(url);
    if (Checker) {
      return url;
    }
    return `${proxy}/media/user_photo/${url}`;
  },
  admin: (url: string | null) => {
    if (!url) {
      return null;
    }
    const Checker = /^https?:\/\//i.test(url);
    if (Checker) {
      return url;
    }
    return `${proxy}/media/admin_photo/${url}`;
  },
};
