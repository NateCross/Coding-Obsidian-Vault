class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  // get value() {
  //   return this.value;
  // }

  // set value(value) {
  //   this.value = value;
  // }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertAtHead(value) {
    let temp = new Node(value);
    temp.next = this.head;
    this.head = temp;
  }

  insertAtTail(value) {
    let temp = new Node(value);
    let ptr = this.tail;
    // while (ptr.next) {
    //   ptr = ptr.next;
    // }
    ptr.next = temp;
  }

  popAtHead() {
    let temp = this.head;
    this.head = this.head.next;
    return temp;
  }

  popAtTail() {
    let ptr = this.tail;
    let temp = ptr;
    ptr = null;
    return temp;
  }

  get tail() {
    let ptr = this.head;
    while (ptr.next) {
      ptr = ptr.next;
    }
    return ptr;
  }

  printList() {
    let ptr = this.head;
    while (ptr) {
      console.log(ptr.value);
      ptr = ptr.next;
    }
  }
}

let list = new LinkedList();

list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtTail(3);

list.printList();

console.log("Popping at head");
list.popAtHead();
list.printList();
// console.log(`Size is ${list.size}`);

console.log("Popping at tail");
list.popAtTail();
list.printList();
