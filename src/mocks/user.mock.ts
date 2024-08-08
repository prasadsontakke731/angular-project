export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    organizationId?: string;
    designation?: string;
    birthDate?: string;
    city?: string;
    pincode?: string;
}

export const users: User[] = [
    {
        id: 'user001',
        name: 'Prasad Sontakke',
        email: 'prasad@gmail.com',
        phoneNumber: '9834756699',
        password: 'pass123',
        organizationId: 'org001',
        designation: 'Developer',
        birthDate: '1990-01-01',
        city: 'Pune',
        pincode: '413306'
    },
    {
        id: 'user002',
        name: 'Sanket Mane',
        email: 'sanket@gmail.com',
        phoneNumber: '7725352625',
        password: 'pass123',
        organizationId: 'org002',
        designation: 'Designer',
        birthDate: '1992-05-15',
        city: 'Solapur',
        pincode: '53525'
    }
];