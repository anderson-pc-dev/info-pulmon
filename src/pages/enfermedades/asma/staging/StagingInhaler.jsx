import { Environment } from "@react-three/drei";

  
  const StagingInhaler = () => {
    return (
    <>
       <Environment files='/hdris/hospital/surgery_1k.hdr' background  />
    </>
    );
  };
  
  export default StagingInhaler;