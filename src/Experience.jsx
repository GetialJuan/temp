import { OrbitControls } from "@react-three/drei";
import World from "./world/World";
import Lights from "./world/Lights";
import Environments from "./world/Environments";
import { Perf } from "r3f-perf";
import { Suspense } from "react";
import { Girl } from "./world/Girl";
import WelcomeText from "./world/WelcomeText";
import LevelJuly from "./world/levelJuly";
import Arbolhp from "./world/arbolhp";
import Palmera from "./world/palmera";

const Experience = () => {
    return (
        <>
            {/* <Perf position="top-left" /> */}
            <OrbitControls
                target={[0, 1.5, -95]}
                //target={[0, 1.5, 0]}
                enableZoom={false}
                enablePan={false} 
                />
            <Suspense fallback={null}>
                <Lights />
                <Environments />
                <Palmera position={[0, 3.5, -100]}/>
                <Palmera position={[0, 3.5, -90]}/>
                <Palmera position={[0, 3.5, -80]}/>
                <LevelJuly 
                    position={[0, 0, -90]}
                />
                {/* <Arbolhp /> */}
                {/* <World /> */}
                {/*<Girl>
                    <WelcomeText position={[0, 1.5, -92]} />
    </Girl>*/}
            </Suspense>
        </>
    )
}

export default Experience;