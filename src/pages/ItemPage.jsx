import { useEffect, useState } from "react";
import { getData } from "../api/api";
import Item from "../components/item/Item";
import { ItemPageLayout } from "./pages.style";
import { titleStyle } from "../styles/common";
import usePageSize from "../hooks/usePageSize";

/** @jsxImportSource @emotion/react */
const ItemPage = () => {
  const [item, setItem] = useState([]);
  const [best, setBest] = useState([]);
  const pageSize = usePageSize(10, 4, 6);
  const bestPageSize = usePageSize(4, 1, 2);

  const fetchData = async (option) => {
    const { list } = await getData(option);
    setItem(list);
  };

  const fetcBesthData = async (option) => {
    const { list } = await getData(option);
    setBest(list);
  };
  useEffect(() => {
    fetchData({ page: 1, pageSize: pageSize, orderBy: "recent", keyword: "" });
  }, [pageSize]);

  useEffect(() => {
    fetcBesthData({ pageSize: bestPageSize, orderBy: "favorite" });
  }, [bestPageSize]);

  return (
    <div css={ItemPageLayout}>
      <div css={titleStyle}>베스트 상품</div>
      <Item items={best} variant={true} />
      <Item items={item} variant={false} />
    </div>
  );
};

export default ItemPage;
