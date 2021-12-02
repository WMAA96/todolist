

export default class Project {
    constructor(name) {
        this.name = name;
        
    }


    get name() {
        console.log("boom");
        return this._name;
    }

    set name(value) {
        if (value.length < 1) {
            alert("Name is too short")
            return;
        }
        this._name = value;
    }

}



