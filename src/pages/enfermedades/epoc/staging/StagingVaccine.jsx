import { Environment } from "@react-three/drei";

const StagingVaccine = () => {
  return (
    <Environment
      files="../../../hdris/hospital/hospital_room_4k.hdr"
      background
      preset={null}
      resolution={1024}
    />
  );
};

export default StagingVaccine;