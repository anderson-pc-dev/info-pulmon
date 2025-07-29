// components/VideoAsmaWrapper.jsx
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import VideoAsma from './VideoAsma';
import Loader3D from '../../../components/Loader';

const VideoAsmaWrapper = () => {
  return (
    <div style={{ width: '130%', height: '155%', position: 'relative' }}>
      <Suspense fallback={<Loader3D message="Cargando video..." />}>
        <Canvas camera={{ position: [0, 0, 2] }}>
          <VideoAsma />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default VideoAsmaWrapper;