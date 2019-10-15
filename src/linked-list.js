const Node = require("./node");

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(data) {
        const newNode = new Node(data);
        if (this.length == 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // хвостовому элементу в значение next кладём newNode
            newNode.prev = this.tail; // текущее значение хвоста даём новому элементу
            this.tail = newNode; // делаем новый хвост
        }
        this.length++;
    }

    head() {
        return this.head.data;
    }

    tail() {
        return this.tail.data;
    }

    at(index) {
        if (index < 0 || index >= this.length) {
            return null;
        } else {
            let current = 0;
            let count = 0;
            while (count < index) {
                current = current.next;
                count++;
            }
            return current.data;
        }
    }

    insertAt(index, data) {
        let node = new Node(data);
        if ((index = 0)) {
            this.tail.next = node; // хвостовому элементу в значение next кладём newNode
            node.prev = this.tail; // текущее значение хвоста даём новому элементу

            this.tail = node; // делаем новый хвост
        } else {
            let current = this.head;
            let prev = null;
            let count = 0;
            while (count < position) {
                prev = current; // считаем предыдущий элемент
                current = current.next; // считаем нашу позицию
                count++;
            }
            prev.next = node; // предыдущее значение следующего элемента
            node.prev = prev; // предыдущее значение нода = прев

            node.next = current; // даём значению некст объекта нод  значение куррент( посчитанное)
            current.prev = node; // значение прев впереди идущего нода элемента
        }
        this.length++;
    }

    isEmpty() {
        if (this.length == 0) {
            return true;
        } else {
            return false;
        }
    }

    clear() {
        while (length > 0) {
            this.head = this.head.next; //в конструтор этого класса (в хэд) кладём следующий объект
            this.head.prev = null; //меняем значение прев у экземпляра, который стал хэдом
            length--;
        }
    }

    deleteAt(index) {
        if (index < 0 || index >= this.length) {
            return null;
        }
        let current;
        if (index == 0) {
            //current = this.head;
            this.head = this.head.next; //в конструтор этого класса (в хэд) кладём следующий объект
            this.head.prev = null; //меняем значение прев у экземпляра, который стал хэдом
        } else if ((index = this.length - 1)) {
            this.tail = this.tail.prev;
            this.tail.next = 0;
        } else {
            current = this.head;
            let prev = null;
            let count = 0;

            while (count < index) {
                prev = current;
                current = current.next;
                count++;
            }
            prev.next = current.next;
            current.next.prev = prev;
        }
        length--;
    }

    reverse() {}

    indexOf(data) {}
}

module.exports = LinkedList;