import type {ICar} from "../../models/ICar.ts";

interface CarComponentProps {
    car: ICar
}

const CarComponent = ({car}: CarComponentProps) => {
    return (
        <div>
            {car.id}. {car.brand}
        </div>
    );
};

export default CarComponent;
