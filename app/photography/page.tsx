import AboutTeaser from '../components/photography/AboutTeaser';
import KindWords from '../components/photography/KindWords';
import SelectedWork from '../components/photography/SelectedWork';
import WhatIShoot from '../components/photography/WhatIShoot';
import PhotoHero from './hero';

export default function Page() {
  return (
    <div>
      <PhotoHero />
      <AboutTeaser />
      <SelectedWork />
      <WhatIShoot />
      <KindWords />
    </div>
  );
}
