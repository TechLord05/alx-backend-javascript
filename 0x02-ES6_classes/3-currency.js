export default class Currency {
    constructor(code, name) {
        this._code = code;
        this._name = name;
    }

    get code(){
        return this._code;
    }

    set code(newcode) {
       this._code = newcode; 
    }

    get name() {
        return this._name;
    }

    set name(newname) {
        this._name = newname;
    }

    displayFullCurrency() {
        return `${this._name} (${this._code})`;
    }
}
