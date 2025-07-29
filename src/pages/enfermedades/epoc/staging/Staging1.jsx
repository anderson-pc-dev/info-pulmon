import { Environment } from "@react-three/drei";

const StagingHospital = () => {
  return (
    <Environment
      files="../../../hdris/hospital/hospital2.hdr"
      background={true}   
      resolution={1024}   
    />
  );
};

export default StagingHospital;