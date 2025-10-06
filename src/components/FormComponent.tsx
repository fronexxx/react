import {useForm} from "react-hook-form";
import type {ICar} from "../models/ICar.ts";
import {addCar} from "../sevices/api.service.ts";
import {carValidator} from "../validators/carValidator.ts";
import {joiResolver} from "@hookform/resolvers/joi";

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<ICar>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });
    const createHandler = (data: ICar) => {
        addCar(data);
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <input type="number" {...register('price')}/>
                    <div>{errors.price?.message}</div>
                </div>

                <div>
                    <input type="text" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button disabled={!isValid}>Save Car</button>
            </form>
        </div>
    );
};

export default FormComponent;
