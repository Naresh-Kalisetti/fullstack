import dayjs from 'dayjs/esm';

import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 94038,
  lastName: 'Parisian',
  email: 'Jessy.Zulauf@yahoo.com',
  hireDate: dayjs('2023-07-16T11:56'),
  commissionPct: 14006,
};

export const sampleWithFullData: IEmployee = {
  id: 50464,
  firstName: 'Zechariah',
  lastName: 'Jakubowski',
  email: 'Sage97@gmail.com',
  phoneNumber: 'Kyrgyz',
  hireDate: dayjs('2023-07-15T14:55'),
  salary: 20712,
  commissionPct: 36931,
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
