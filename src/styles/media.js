import facepaint from "facepaint";

const breackpoints = [369, 1200, 1920];

const mq = facepaint(breackpoints.map((bp) => `@media (min-width: ${bp}px)`));

export default mq;
