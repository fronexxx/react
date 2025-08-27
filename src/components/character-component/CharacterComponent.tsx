import type {ICharacter} from "../../models/ICharacter.ts";
import type {FC, ReactNode} from "react";
import './CharacterComponent.css';

interface CharacterComponentProps {
    item: ICharacter
    children: ReactNode;
}

export const CharacterComponent: FC<CharacterComponentProps> = ({item, children}) => {
    return (
        <div className='my-10 border-2 bg-cyan-700'>
            <h3 className='text-2xl'>{item.name} {item.surname}</h3>
            <img src={item.photo} alt={item.name}/>
            <p>{children}</p>
        </div>
    );
};
