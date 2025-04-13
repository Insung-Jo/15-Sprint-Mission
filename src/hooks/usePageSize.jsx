import { useEffect, useState } from "react";

const usePageSize = (defaultSize, smallSize, mediumSize) => {
  const [size, setSize] = useState(defaultSize);

  useEffect(() => {
    const updateSize = () => {
      if (window.matchMedia("(max-width: 740px)").matches) {
        setSize(smallSize);
      } else if (window.matchMedia("(max-width: 1200px)").matches) {
        setSize(mediumSize);
      } else {
        setSize(defaultSize);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, [defaultSize, smallSize, mediumSize]);

  return size;
};

export default usePageSize;
