export interface Passenger {
    children?: string;
    name: string;
}

const passenger1: Passenger = {
    name: 'Francisco',
}

const passenger2: Passenger = {
    name: 'Francisco',
    children: ['Natalia', 'Elizabeth']
}
