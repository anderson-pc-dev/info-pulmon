import { Environment } from "@react-three/drei";
// import { Color } from "three";

const StagingPillBottle = () => {
  return (
    <Environment
      files="../../../hdris/hospital/hospital_room_4k.hdr"
      background={true}   
      resolution={1024}   
    />
  );
};

export default StagingPillBottle;