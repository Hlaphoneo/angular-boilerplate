import { Injectable } from "@angular/core";


interface NavParamsInterface { 
     key    : string;
     data   : any; 
}

@Injectable()

export class NavParams { 
    _runTimeData : any = [];

    constructor() { }

    public add(_obj : NavParamsInterface) : void {

        if(_obj.data) { 
            this._runTimeData[_obj.key] = _obj.data;
            sessionStorage.setItem(_obj.key,_obj.data);
        } else { 
            sessionStorage.setItem(_obj.key,null); 
        }   

    }

    public get(key : string) : any { 

        if(this._runTimeData[key] == null) return sessionStorage.getItem(key);
        return this._runTimeData[key];
        
    }
}   