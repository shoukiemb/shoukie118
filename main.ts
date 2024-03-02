import MarksTree from "./avlTree";

const node1 = new MarksTree();
node1.insert(25);
node1.insert(75);
node1.insert(55);
node1.insert(85);
node1.insert(35);
node1.insert(50);

node1.inOrderTraversal(node1.root);
node1.nodeCount();