import { IData } from "@/interface/data";

export const addAllP = (data: IData[])=>{
    let result =0; 
    for(const value of data){
        result += value.probability;
    }
    return result;
}

export const addAllXProbability = (data: IData[])=>{
    let result =0; 
    for(const value of data){
        result += value.elementXprobability;
    }
    return result;
}

export const addAllPowXProbability = (data: IData[])=>{
    let result =0; 
    for(const value of data){
        result += value.powXProbability;
    }
    return result;
}