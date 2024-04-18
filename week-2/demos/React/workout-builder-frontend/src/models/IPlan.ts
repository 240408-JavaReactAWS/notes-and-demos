import { IExercise } from "./IExercise";
import { IUser } from "./IUser";

export interface IPlan{
    planId: number,
    name: string,
    owner: IUser,
    exercises: IExercise[]
}