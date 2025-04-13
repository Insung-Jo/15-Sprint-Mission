import { css } from "@emotion/react";
import mq from "../../styles/media";

const LogoStyle = css`
  width: 15.3rem;
  height: 5.1rem;

  ${mq({
    width: ["8.1rem", "15.3rem"],
    height: ["2.7rem", "5.1rem"],
  })}
`;

export default LogoStyle;
