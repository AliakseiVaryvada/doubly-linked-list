const Node = require("./node");

class LinkedList {
    constructor() {
        this._head = new Node();
        this._tail = new Node();
        this.length = 0;
    }

    append(data) {
        let node = new Node(data);
        if (this.length == 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node; // хвостовому элементу в значение next кладём newNode
            node.prev = this._tail; // текущее значение хвоста даём новому элементу
            this._tail = node; // делаем новый хвост
        }
        this.length++;
        return this;
    }

    head() {
        if (this._head === null) {
            return null;
        }
        return this._head.data;
    }

    tail() {
        if (this._tail === null) {
            return null;
        }
        return this._tail.data;
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let current = this._head;
            let count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }
            return current.data;
        }
    }

    insertAt(index, data) {
        let current = this._head;
        let count = 1;
        while (count < index) {
            prev = current; // считаем предыдущий элемент
            current = current.next; // считаем нашу позицию
            count++;
        }
        let node = new Node(data, current, current.next);

        current.next = node;
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        this.length = 0;
        this._head = new Node();
        this._tail = new Node();
        return this;
    }

    deleteAt(index) {
        let current = this._head;
        let count = index;
        if (count > 0 && count < this.length - 1) {
            while (count <= index) {
                current = current.next;
                count++;
            }
            current.prev.next = current.next;
            current.next.prev = current.prev;
        }
        if (count == 0) {
            this._head = this._head.next; //в конструтор этого класса (в хэд) кладём следующий объект
        }
        if (count == this.length - 1) {
            this._tail = this._tail.prev;
        }
        this.length--;
        return this;
    }

    reverse() {
        let current = this._head;
        //let currentT = this._tail;
        let index = this.length;
        //для реверса двусвязного списка достаточно у каждого элемента поменять местами PREV и NEXT
        while (index > 0) {
            let elNext = current.next;
            if (current.next == null) {
                break;
            }
            current.next = current.prev;
            current.prev = elNext;
            current = elNext;
            index--;
        }
        let temp = this._tail;
        this._tail = this._head;
        this._head = temp;
        //в голове некст и прев меняем
        this._head.next = this._head.prev;
        this._head.prev = null;
        return this;
    }

    indexOf(data) {
        let current = this._head;
        if (this._head.data == data) {
            return 0;
        }
        let count = 1;
        while (count < this.length) {
            if (current.next.data == data) {
                return count;
            } else {
                current = current.next;
                count++;
            }
        }
        return -1;
    }
}

module.exports = LinkedList;