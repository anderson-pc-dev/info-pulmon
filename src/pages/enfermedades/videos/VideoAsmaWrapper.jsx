// components/VideoEPOCWrapper.jsx
import { Canvas } from '@react-three/fiber';
import VideoAsma from './VideoAsma';

const VideoAsmaWrapper = () => {
  return (
    <div style={{ width: '130%', height: '155%' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <VideoAsma />
      </Canvas>
    </div>
  );
};

export default VideoAsmaWrapper;