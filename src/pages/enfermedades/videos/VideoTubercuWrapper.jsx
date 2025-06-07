import { Canvas } from '@react-three/fiber';
import VideoTuberculosis from './VideoTuberculosis';

const VideoTubercuWrapper = () => {
  return (
    <div style={{ width: '130%', height: '140%' }}>
      <Canvas camera={{ position: [0, 0, 2] }}>
        <VideoTuberculosis />
      </Canvas>
    </div>
  );
};

export default VideoTubercuWrapper;