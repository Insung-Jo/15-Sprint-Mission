import { useEffect, useState } from "react";
import { getData } from "../api/api";
import Item from "../components/item/Item";
import { pageInner } from "./pages.style";
import { titleStyle } from "../styles/common";

/** @jsxImportSource @emotion/react */
const ItemPage = () => {
  const [item, setItem] = useState([]);
  const [best, setBest] = useState([]);

  const fetchData = async (option) => {
    const { list } = await getData(option);
    setItem(list);
  };

  const fetcBesthData = async (option) => {
    const { list } = await getData(option);
    setBest(list);
  };
  useEffect(() => {
    fetchData({ page: 1, pageSize: 10, orderBy: "favorite", keyword: "" });
  }, []);

  useEffect(() => {
    fetcBesthData({ pageSize: 4, orderBy: "favorite" });
  }, []);

  return (
    <div css={pageInner}>
      <div css={titleStyle}>베스트 상품</div>
      <Item items={best} variant={true} />
      <Item items={item} variant={false} />
    </div>
  );
};

export default ItemPage;
