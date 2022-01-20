import { format } from "date-fns";

export default class Todo {
    constructor(title, description, duedate) {
        this.title = title;
        this.description = description;
        this.duedate = duedate;
    }


        get duedate() {
            return this._duedate
        }

        set duedate(value) {
            
            value = format(new Date(value), "dd,MMM,yyyy");
            this._duedate = value;
        }

        // add duedate + priority + notes later.


    }

