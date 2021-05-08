import React, { useEffect, useState } from 'react';
import { CircleLoader } from 'react-spinners';

import { getCatUrl } from '../api';

const CatImage = () => {
  const [catUrl, setCatUrl] = useState();

  useEffect(() => {
    getCatUrl().then(setCatUrl);
  }, []);

  return catUrl ? 
        (<div>
          <img style={{maxWidth: '500px'}} src={catUrl} /> 
          <p style={{fontSize: '12px'}}>Made by - Jhoan García</p>
        </div>) 
  : <CircleLoader color="#00aeff" />;
};

export default CatImage;
