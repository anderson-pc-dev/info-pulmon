// components/VideoEPOCWrapper.jsx
import { Canvas } from '@react-three/fiber';
import VideoAsma from './VIdeoAsma';

const VideoAsmaWrapper = () => {
  return (
    <div style={{ width: '130%', height: '140%' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <VideoAsma />
      </Canvas>
    </div>
  );
};

export default VideoAsmaWrapper;