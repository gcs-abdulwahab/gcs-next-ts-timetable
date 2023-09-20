// export Room Type which has id , name , code


export interface Room {
    id: number;
    name: string;
    code: string;
};

export interface Course{
    id: number;
    name: string;
    code: string;
    display_code: string;
}

export type Teacher = {
    id: number;
    name: string;
    
}