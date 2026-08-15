import AboutTeaser from '../components/photography/AboutTeaser';
import SelectedWork from '../components/photography/SelectedWork';
import PhotoHero from './hero';

export default function Page() {
  return (
    <div>
      <PhotoHero />
      <AboutTeaser />
      <SelectedWork />
    </div>
  );
}
