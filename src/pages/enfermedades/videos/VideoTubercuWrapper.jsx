import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import VideoTuberculosis from './VideoTuberculosis';
import Loader3D from '../../../components/Loader';

const VideoTubercuWrapper = () => {
  return (
    <div style={{ width: '130%', height: '155%', position: 'relative' }}>
      <Suspense fallback={<Loader3D message="Cargando video..." />}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <VideoTuberculosis />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default VideoTubercuWrapper;