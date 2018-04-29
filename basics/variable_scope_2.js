function problem1() {
	function say() {
	  if (false) {
	    var a = 'hello from inside a block';
	  }

	  console.log(a);
	}

	say(); // undefined. a is declared after hoisting, because block doesn't create a new scope.
}

function problem2() {
	function hello() {
	  a = 'hello';
	  console.log(a);

	  if (false) {
	    var a = 'hello again';
	  }
	}

	hello(); // 'hello'.this time a is declared and assigned a value after hoisting
	console.log(a); // Error. a is declared only as a local variable inside the function.
}

function problem3() {
	var a = 'hello';

	for (var i = 0; i < 5; i += 1) {
	  var a = i;
	}

	console.log(a); // 4.a is declared on a global level then reassigned 4 times within the loop.
}

function problem4() {
	var a = 1;

	function foo() {
	  a = 2;
	  function bar() {
	    a = 3;
	    return 4;
	  }

	  return bar();
	}

	console.log(foo());
	console.log(a);
}

/* Problem 4 : hoisted version

function foo() {
	function bar() {
		a = 3;
		return 4;
	}
	a = 2;

	return bar();
}

var a;
a = 1;
console.log(foo()); 4. "a" is reassigned the value "3" after holding the value "2".
console.log(a); '3'
*/

function problem5() {
	var a = 'global';

	function checkScope() {
	  var a = 'local';
	  function nested() {
	    var a = 'nested';
	    function superNested() {
	      a = 'superNested';
	      return a;
	    }

	    return superNested();
	  }

	  return nested();
	}

	console.log(checkScope());
	console.log(a);
}

/* Problem 5 : hoisted version 

function checkScope() {
	function nested() {
		function superNested() {
			a = 'supernested' ; // step 4, step 10
			return a; // step 5, step 11
		}
		var a; // step 2, step 8
		a = 'nested'; // step2. local variable 'a' to the scope of nested function gets assigned 'nested'
		// step 8. the variable declared on step 4 is not assigned 'nested' as a is here declared on a local scope.
		return superNested(); // step3 local variable 'a' to the scope of nested function gets re-assigned'supernested' (see step 4).
		// step 9. local variable 'a' declared to the scope of checkscope function get reassigned 'supernested' value
	}
	var a; // step 6
	a = 'local'; // step 6. local variable a to the scope of the checkscope function gets assigned 'local'
	return nested(); // step 7. at the end of step 11, 'supernested' is returned.
}

var a;
a = 'global';

console.log(checkScope()); // 'supernested'. step 1. see step 2 above.
console.log(a); // 'global'. globally declared variable 'a' was never reassigned within the functions,
// because variables of the same name, declared on more inner scopes, took precedence.
*/

function problem6() {
	var a = 'outer';
	var b = 'outer';

	console.log(a); // 'outer'
	console.log(b); // 'outer'
	setScope(a); // the value referenced by 'a' is assigned to the function argument.
	// the variable 'foo' local to the function references the value holded by 'a' but 'a' is not reassigned. 
	console.log(a); // 'outer'
	console.log(b); // 'inner'

	function setScope(foo) { // after hoisting, the function gets before var declarations.
	  foo = 'inner';
	  b = 'inner';
	}
}

function problem7() {
	var total = 50;
	var increment = 15;

	function incrementBy(increment) {
	  total += increment;
	}

	console.log(total); // 50.
	incrementBy(10); //  total gets reassigned its value incremented by 10
	console.log(total); // 60
	console.log(increment); // 15. increment that was defined by the function temporarily holded the value '10', but the variable was created in an inner scope.
}

function problem8() {
	var a = 'outer';

	console.log(a); // 'outer'
	setScope(); // TypeError.at this point, setscope is only declared and not yet a function after hoisting,
	// because assignment of setScope to a value, even if it's a function, still doesn't take precedence after hoisting.
	console.log(a); 

	var setScope = function () {
	  a = 'inner';
	};
}















