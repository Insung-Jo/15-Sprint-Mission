import {
  ItemImgStyle,
  ItemNameStyle,
  ItemPriceStyle,
  FavoriteContainer,
  FavoriteCountStyle,
  FavoriteImageStyle,
  ItemUlStyle,
  ItemIlStyle,
} from "./Item.styles";

/** @jsxImportSource @emotion/react */
function ItemList({ item, variant }) {
  const { name, price, images, favoriteCount } = item;

  return (
    <>
      <img css={ItemImgStyle(variant)} src={images} alt={name} />
      <p css={ItemNameStyle}>{name}</p>
      <p css={ItemPriceStyle}>
        {price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원"}
      </p>
      <div css={FavoriteContainer}>
        <button css={FavoriteImageStyle}></button>
        <p css={FavoriteCountStyle}>{favoriteCount}</p>
      </div>
    </>
  );
}

function Item({ items, variant }) {
  return (
    <>
      <ul css={ItemUlStyle(variant)}>
        {items.map((item) => {
          return (
            <li css={ItemIlStyle(variant)} key={item.id}>
              <ItemList item={item} variant={variant} />
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Item;
