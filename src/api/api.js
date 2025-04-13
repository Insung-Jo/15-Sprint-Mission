import axios from "axios";

export async function getData({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
    keyword ? `&keyword=${keyword}` : ""
  }`;
  const res = await axios.get(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  console.log(res.data);
  return res.data;
}
