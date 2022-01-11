import { HALObject } from "src/app/common/domain/HALObject";
import { Rack } from "./Rack";

export class Bookcase extends HALObject {

    name!: string;
    rackList!:Rack[];
}