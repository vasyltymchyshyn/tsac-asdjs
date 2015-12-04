// es1=2, es2=344161.650263361, es5=9999;//
// es1=2; es2=344161.650263361; ok
/*
function unoI(array){
 var conta=0;
for(i=0;i<array.length;i++){
  if(array[i]==5070){
    conta++;
  }
}
return conta;
}
*/
	function initialArray() {
		var seed = 1;
		function random() {
			var x = Math.sin(seed++) * 10000;
			return Math.floor(x);
		}

		var a = [];
		for(var i = 0; i < 10000; ++i) {
			a.push(random());
		}
		return a;
	}


	function unoR(array) {
	  if(array.length == 0) {
		return 0;
	  } else {
	  if(array[0] == 5070) {
	  return 1 + unoR(array.slice(1));
	  } else {
		return unoR(array.slice(1));
		}
	  }
	}



	function dueR(array) {

	 var controllo = array.filter(function(x){if(x >= 0 && x%2 == 0) return x;})
	 var quadrato = controllo.map(function(num){return num * num;})
	 var somma = quadrato.reduce((acc,x)=> acc + x,0);
	 var radice = Math.sqrt(somma);

	 return radice;
	}



	function Node(i, left, right) {
		this.item = i;
		this.l = left;
		this.r = right;
	}

	function BST() {
		this.root = null;

	}

	BST.prototype.addNode = function(currentNode, newNode) {
		if (newNode.item < currentNode.item) {
			 if (currentNode.l == null)
			   currentNode.l = newNode;
			 else
			   this.addNode(currentNode.l, newNode);
		} else {
			 if (currentNode.r == null)
			   currentNode.r = newNode;
			 else
			   this.addNode(currentNode.r, newNode);
		}
	}

	BST.prototype.add = function(item) {
		if (this.root == null) {
			this.root = new Node(item, null, null);
		} else {
			this.addNode(this.root, new Node(item, null, null));
		}
	}



	function es_5_creaTree(array) {
		var tree=new BST();

		for(i=0;i<array.length;i++) {
			tree.add(array[i]);
		}	
		return cercaM(tree.root,0);
	}

	function cercaM(tree,massimo) {
		if(tree==null) {
		   return massimo; }
		else{
			massimo=tree.item;
			return cercaM(tree.r, massimo);
		}
		return cercaM(tree.root,0);
	}







