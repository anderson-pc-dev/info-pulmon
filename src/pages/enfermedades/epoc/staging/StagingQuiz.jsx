import { Environment } from "@react-three/drei";

const StagingBronchi = () => {
  return (
    <Environment
      files="../../../hdris/campo/campo.hdr"
      background={true}   
      resolution={1024}   
    />
  );
};

export default StagingBronchi;