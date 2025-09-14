import type {IUserDummy} from "../../models/dummy-models/IUserDummy.ts";

interface UserDummyComponentProps {
    user: IUserDummy
}

const UserDummyComponent = ({user}: UserDummyComponentProps) => {
    return (
        <div className="border border-gray-400 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-4">
                <img src={user.image} alt={user.firstName} className="w-16 h-16 rounded" />
                <div>
                    <h2 className="text-lg font-semibold">
                        {user.firstName} {user.lastName} ({user.username})
                    </h2>
                    <p className="text-sm text-gray-700">Email: {user.email}</p>
                    <p className="text-sm text-gray-700">Phone: {user.phone}</p>
                    <p className="text-sm text-gray-700">Role: {user.role}</p>
                </div>
            </div>

            <h3 className="mt-3 font-medium">Personal info</h3>
            <p className="text-sm">Age: {user.age}</p>
            <p className="text-sm">Gender: {user.gender}</p>
            <p className="text-sm">Birth date: {user.birthDate}</p>

            <h3 className="mt-3 font-medium">Address</h3>
            <p className="text-sm">
                {user.address.address}, {user.address.city}, {user.address.country}
            </p>

            <h3 className="mt-3 font-medium">Company</h3>
            <p className="text-sm">{user.company.name}</p>
            <p className="text-sm">
                {user.company.department} — {user.company.title}
            </p>
        </div>
    );
};

export default UserDummyComponent;
