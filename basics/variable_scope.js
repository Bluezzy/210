function problem1() {
  var a = 'outer';

  function testScope() {
    var a = 'inner';
    console.log(a);
  }

  console.log(a);
  testScope();
  console.log(a);
}

function problem2() {
  var a = 'outer';

  function testScope() {
    a = 'inner';
    console.log(a);
  }

  console.log(a);
  testScope();
  console.log(a);
}

function problem3() {

  var basket = 'empty';

  function goShopping() {
    function shop1() {
      basket = 'tv';
    }

    console.log(basket);

    function shop2() {
      basket = 'computer';
    }

    function shop3() {
      var basket = 'play station';
      console.log(basket);
    }

    shop1();
    shop2();
    shop3();

    console.log(basket);
  }

  goShopping(); 

}

function problem4() {
  function hello() {
    a = 'hello';
  }

  hello(); //  undeclared variable, therefore 'hello' is assigned to 'a' as a global variable.
  console.log(a); // we log the value referenced by this variable : 'hello'.
}

function problem5() {
  function hello() {
    var a = 'hello';
  }

  hello();
  console.log(a); //Error. the variable is declared, therefore it is local to the function. it can not be accessed from an outer scope.
}

function problem6() {
  console.log(a);
  var a = 1;
}

function problem7() {
  console.log(a);

  function hello() {
    a = 1;
  }
}

/*

Problem 1 hoisted version attempt 

function testScope() {
  var a;
  a = 'inner';
  console.log(a);
}

var a;
a = 'outer';
console.log(a); // 'outer' accessing the variable a on a global scope
testScope();  // 'inner' accessing the local scope that the function creates.
console.log(a) // 'outer' because it tries to access the global scope again.





Problem 2 hoisted version attempt 

function testScope() {
  a = 'inner';
  console.log(a);
}

var a;
a = 'outer';

console.log(a); // 'outer' accessing the variable a declared on a global scope.
testScope(); // 'inner'.the same variable 'a' declared on a global scope is being reassigned on an inner scope that the function has access to.
console.log(a); // 'inner' the variable 'a' was being reassigned after the function invokation above.
 



Problem 3 : hoisted version attempt 

function goShopping() {
  function shop1() {
    basket = 'tv';
  }

  function shop2() {
    basket = 'computer';
  }

  function shop3() {
    var basket;
    basket = 'play station';
    console.log(basket);
  }

  console.log(basket); // 'empty'. inner scope have access to variable 'basket' declared on the outer scope.
  shop1(); // the same variable 'basket' declared in an outer scope is being reassigned another value, but no output here.
  shop2(); // another reassignment of the same variable, still no output, but at this point, basket declared on an outer scope has the value 'computer'.
  shop3(); // 'play station'. a local variable is declared and only accessible from this function.
  console.log(basket); //'computer'. This expression tries to access the variable 'basket' 
                       // declared on an outer level. This variable has been reassigned twice within inner scopes.
}


var basket;
basket = 'empty';
goShopping();




Problem 6 : hoisted version

var a;
console.log(a); //undefined. no value yet assigned to variable 'a'. 
a = 1;




Problem 7 : hoisted version attempt

function hello () {
  a = 1; 
}

console.log(a); // Error. a is not yet declared as a global variable, because the function hello wasn't invoked. */






















