import {useEffect, useState} from "react";
import {getCars} from "../../sevices/api.service.ts";
import type {ICar} from "../../models/ICar.ts";
import CarComponent from "../car-component/CarComponent.tsx";

const CarsComponent = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
    }, []);
    getCars().then(cars => setCars(cars));
    return (
        <div>
            {
                cars.map(car => (<CarComponent key={car.id} car={car}/>))
            }
        </div>
    );
};

export default CarsComponent;
