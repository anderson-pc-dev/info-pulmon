// components/VideoEPOCWrapper.jsx
import { Canvas } from '@react-three/fiber';
import VideoEPOC from './videoEPOC';

const VideoEPOCWrapper = () => {
  return (
    <div style={{ width: '130%', height: '140%' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <VideoEPOC />
      </Canvas>
    </div>
  );
};

export default VideoEPOCWrapper;