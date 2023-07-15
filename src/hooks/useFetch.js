import access_token from "./accessToken";

export const getCars = async (name, category, page) => {
  const res = await fetch(`https://api-car-rental.binaracademy.org/admin/v2/car?name=${name}&category=${category}&page=${page}&pageSize=10`, {
    headers: {
      access_token,
    },
  });
  return res.json();
};
