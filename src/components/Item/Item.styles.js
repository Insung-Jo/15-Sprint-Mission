import { css } from "@emotion/react";
import mq from "../../styles/media";
import heartImg from "../../assets/icons/ic_heart_off.png";

const ItemImgStyle = (variant) => css`
  width: ${variant ? "28.2rem" : "22.1rem"};
  height: ${variant ? "28.2rem" : "22.1rem"};
  object-fit: cover;
  object-position: center;
  border-radius: 1.6rem;
`;

const ItemNameStyle = css`
  font-size: 1.4rem;
  font-weight: 500;
`;

const ItemPriceStyle = css`
  font-size: 1.6rem;
  font-weight: 700;
`;

const FavoriteContainer = css`
  display: flex;
  gap: 0.8rem;
`;

const FavoriteCountStyle = css`
  font-size: 1.2rem;
  font-weight: 500;
`;

const FavoriteImageStyle = css`
  width: 1.6rem;
  height: 1.6rem;
  background-image: url(${heartImg});
  background-size: 1.6rem;
  background-color: transparent;
  background-repeat: no-repeat;
`;

const ItemUlStyle = (variant) => css`
  display: grid;
  grid-template-columns: ${variant ? "repeat(4, 282px)" : "repeat(5, 221px)"};
  justify-content: space-between;
  gap: 2.4rem;
`;

const ItemIlStyle = (variant) => css`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: ${variant ? "28.2rem" : "22.1rem"};
  height: ${variant ? "37.8rem" : "31.7rem"};
  margin-top: 4rem;
`;
export {
  ItemImgStyle,
  ItemNameStyle,
  ItemPriceStyle,
  FavoriteContainer,
  FavoriteCountStyle,
  FavoriteImageStyle,
  ItemUlStyle,
  ItemIlStyle,
};
