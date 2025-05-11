import { useEffect, useState } from "react";
import usePageSize from "../hooks/usePageSize";
import { getData } from "../api/api";
import Item from "../components/item/Item";
import Toolbar from "../components/ToolBar/ToolBar";
import { ItemPageLayout } from "./pages.style";
import { titleStyle } from "../styles/common";

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
      <h2 css={titleStyle}>베스트 상품</h2>
      <section>
        <Item items={best} variant={true} />
      </section>
      <section>
        <Toolbar />
      </section>
      <section>
        <Item items={item} variant={false} />
      </section>
    </div>
  );
};

export default ItemPage;
