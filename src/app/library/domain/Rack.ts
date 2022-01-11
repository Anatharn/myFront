import { HALObject } from "src/app/common/domain/HALObject";

export class Rack extends HALObject{

    name!: string;

    constructor(name: string){
        super();
        this.name = name;
    }
}