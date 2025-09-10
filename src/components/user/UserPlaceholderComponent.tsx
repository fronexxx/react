import type {IUser} from "../../models/IUser.ts";
import type {FC} from "react";

type UserPlaceholderComponentPropsType = {
    user: IUser
}

const UserPlaceholderComponent: FC<UserPlaceholderComponentPropsType> = ({user: {id, name, username, email, address, phone, website, company}}) => {
    return (
        <div className='mt-4'>
            <div className='ml-5 mb-10'>
                <h3 className='text-3xl'>{id}. Name: {name}.</h3>
                <h4 className='text-2xl'>Username: {username}</h4>
                <p>Email: {email}</p>
                <ul className='mt-2 mb-2'>
                    <p className='font-bold'>Address:</p>
                    <li>- Street: {address.street}.</li>
                    <li>- Suite: {address.suite}.</li>
                    <li>- City: {address.city}.</li>
                    <li>- Zip: {address.zipcode}.</li>
                    <p className='font-bold'>Geo:</p>
                    <li>- Lat: {address.geo.lat}.</li>
                    <li>- Lng: {address.geo.lng}.</li>
                </ul>
                <p>Phone Number: {phone}.</p>
                <p>Website: {website}.</p>
                <ul className='mt-2'>
                    <p className='font-bold'>Company:</p>
                    <li>- Company name: {company.name}.</li>
                    <li>- Catchphrase: {company.catchPhrase}.</li>
                    <li>- BS: {company.bs}.</li>
                </ul>
            </div>
        </div>
    );
};

export default UserPlaceholderComponent;
