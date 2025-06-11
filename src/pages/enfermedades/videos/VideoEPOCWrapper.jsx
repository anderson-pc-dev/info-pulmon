// components/VideoEPOCWrapper.jsx
import { Canvas } from '@react-three/fiber';
import VideoEPOC from './VideoEPOC';

const VideoEPOCWrapper = () => {
  return (
    <div style={{ width: '130%', height: '155%' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <VideoEPOC />
      </Canvas>
    </div>
  );
};

export default VideoEPOCWrapper;