// components/VideoEPOCWrapper.jsx
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import VideoEPOC from './VideoEPOC';
import Loader3D from '../../../components/Loader';

const VideoEPOCWrapper = () => {
  return (
    <div style={{ width: '130%', height: '155%', position: 'relative' }}>
      <Suspense fallback={<Loader3D message="Cargando video..." />}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <VideoEPOC />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default VideoEPOCWrapper;