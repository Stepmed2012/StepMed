import { IStaff, staffDoctors } from '@data/nashiVrachi';
import { FC } from 'react';

const StaffProfile: FC<IStaff> = (staff) => {
  return (
    <div className="flex lg:flex-row flex-col mt-12">
      <div className="w-[250px] min-w-[250px] mr-4">
         <img
        alt={staff.fullName}
        src={staff.photoUrl || '/images/staff/default.jpg'}
        className=""
      />
      </div>
      <div>
        <h1 className="font-normal">{staff.fullName}</h1>
        <h2 className="font-normal text-primary">{staff.workPosition}</h2>
        <ul className="custom-text">
          {staff.education.map(e => (<li className="mb-2">{e}</li>))}
        </ul>
      </div>
    </div>
  );
};

export default function NashiVrachi() {
  return (
    <div className="container">
      <h1>Наши сотрудники</h1>
      {staffDoctors.map((staff) => (
        <StaffProfile {...staff} key={staff.id} />
      ))}
    </div>
  );
}
