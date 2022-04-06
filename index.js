const { add } = require("nodemon/lib/rules");

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    if (node.value < this.value) {
      if (!this.left) this.left = node;
      else this.left.add(node);
    } else {
      if (!this.right) this.right = node;
      else this.right.add(node);
    }
  }
}

const B = new BinaryTreeNode("B");
const A = new BinaryTreeNode("A");
const C = new BinaryTreeNode("C");
const D = new BinaryTreeNode("D");

B.add(A);
B.add(D);
B.add(C);

console.log(B);

class PersonTreeNode {
    constructor(person) 
      this.value = person.name;
      this.person = person;
      this.left = null;
      this.right = null;
    }
  
    add(node) {
        if (node.value < this.value) {
          if (!this.left) this.left = node;
          else this.left.add(node);
        } else {
          if (!this.right) this.right = node;
          else this.right.add(node);
        }
    

    
  
    findPerson(name) {
      if(this.value === name) return this.person;

      const dir = node.value < this.value ? 'left' : 'right';
      
      if(this[dir]) return null;

      return this[dir].findPerson(name);
    }
}
}