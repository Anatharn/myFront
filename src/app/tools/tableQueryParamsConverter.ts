import { NzTableQueryParams } from "ng-zorro-antd/table";

export class TableQueryParamsConverter {
    
    public static convertSortParams(params: NzTableQueryParams): string {
        console.log("convertSortParams", params)
        let sortArray = params.sort
            .filter(param => !!param.value)
            .map(param => param.key);
        if(!sortArray || sortArray.length === 0) {
            return "";
        }
        console.log("sortArray", sortArray);
        let sort = sortArray
                .reduce((result, key) => `${result},${key}`);
        console.log("sort", sort);
        let order =params.sort
            .find(param => !!param.value);
        console.log("order", order);
        if(!!order&&!!order.value){
            switch(order.value){
                case "ascend":
                    return `${sort},asc`;
                case "descend":  
                    return `${sort},desc`;
            }
        }
        return "";
    }
}