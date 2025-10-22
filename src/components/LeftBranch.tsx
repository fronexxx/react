import LeftBranchA from "./LeftBranchA.tsx";
import {useMemo} from "react";

const LeftBranch = () => {
    const memox = useMemo(() => {
        for (let i = 0; i < 1000; i++) {
                console.log(i);
        }
        return null;
    }, []);
    return (
        <div>Left Branch
            <LeftBranchA/>
        </div>
    );
};

export default LeftBranch;
