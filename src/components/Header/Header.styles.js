import { css } from "@emotion/react";
import mq from "../../styles/media";

const HeaderStyle = css(
  mq({
    paddingInline: ["2.4rem", "2.4rem", "20rem"],
    paddingBlock: "0.9rem",
    borderBottom: "0.1rem solid #dfdfdf",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  })
);

const containerStyle = css`
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export { HeaderStyle, containerStyle };
