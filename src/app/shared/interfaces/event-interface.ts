export interface eventInterface{
    id:number,
    poster:string,
    title: string,
    date: string,
    description:string,
    price: string,
    location: string,
    executer: string[],
    type_name: string,
    institute:{
        name:string,
        logo:string,
    },
    start_date:string,
}