export default class HolbertonCourse {
    constructor(name, length, students) {
        this._name = name;
        this._length = length;
        this._students = students;
    }
    // Getter and setter for name
    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value === 'string') {
            this._name = value;
        } else {
            throw new TypeError('Name must be a string')
        }
    }

    // Getter and setter for length
    get length() {
        return this._length;
    }

    set length(len) {
        if (typeof len === 'number') {
            this._length = len;
        } else {
            throw new TypeError('Length must be a number')
        }
    }

    get students() {
        return this._students;
    }

    set students(newStudents) {
        this._students = newStudents;
    }
}
