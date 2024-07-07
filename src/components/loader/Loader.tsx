import React, { useEffect, useState } from 'react';
import './Loader.scss';
import { useTranslation } from 'react-i18next';

const Loader: React.FC = () => {
  const { t } = useTranslation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 4500;
    let startTime: number;

    const animateProgress = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const percentage = Math.min(progress / duration, 1);
      const currentProgress = Math.floor(percentage * 100);
      setProgress(currentProgress);

      if (progress < duration) {
        requestAnimationFrame(animateProgress);
      }
    };

    requestAnimationFrame(animateProgress);
  }, []);

  return (
    <div className='wrapperLoader'>
      <div className="circle-wrap">
        <div className="circle">
          <div className="mask full">
            <div className="fill" style={{ transform: `rotate(${progress * 1.8}deg)` }}></div>
          </div>
          <div className="mask half">
            <div className="fill" style={{ transform: `rotate(${progress * 1.8}deg)` }}></div>
          </div>
          <div className="inside-circle">{`${progress}%`}</div>
        </div>
      </div>
      <p className='loaderText'>{t('Finding')}</p>
    </div>
  );
};

export default Loader;
