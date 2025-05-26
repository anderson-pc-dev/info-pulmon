import { Environment } from "@react-three/drei";

const StagingBronchi = () => {
  return (
    <Environment
      files="../../../hdris/hospital/surgery_4k.hdr"
      background={true}   
      resolution={1024}   
    />
  );
};

export default StagingBronchi;