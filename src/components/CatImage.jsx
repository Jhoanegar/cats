import React, { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

import { getCatUrl } from '../api';

const CatImage = () => {
  const [catUrl, setCatUrl] = useState();

  useEffect(() => {
    getCatUrl().then(setCatUrl);
  }, []);

  return catUrl ? <img src={catUrl} /> : <CircleLoader color="#00aeff" />;
};

export default CatImage;
