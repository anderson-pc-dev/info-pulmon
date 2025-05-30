import { Environment } from "@react-three/drei";

const StagingVaccine = () => {
  return (
    <Environment
      files="../../../hdris/hospital/hospital_room_4k.hdr"
      background={true}   
      resolution={1024}   
    />
  );
};

export default StagingVaccine;