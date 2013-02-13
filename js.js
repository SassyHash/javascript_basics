var my_uniq = function (array) {
  var deDuped = [];
  for(var i = 0; i < array.length; i++) {
    if (deDuped.indexOf(array[i]) == -1) {
      deDuped.push(array[i]);
    }
  }
  return deDuped;
}

var two_sum = function (array) {
  var pairs = [];
  for(var i = 0; i<array.length; i++) {
    for(var j = i+1; j<array.length; j++) {
      if (array[i] * (-1) == array[j]) {
        pairs.push([i,j]);
      }
    }
  }
  return pairs;
}

var transpose = function (array) {
  var transposed = [];
  function addArray () {
    transposed.push([]);
  }
  array.forEach(addArray);

  for (var i =0 ; i<array.length; i++) {
    for (var j=0; j<array[i].length; j++) {
      transposed[i].push(array[j][i]);
    }
  }
  return transposed;
}

var times_two = function (array) {
  var multiplied = [];

  function multiply (el) {
    multiplied.push(el * 2);
  }

  array.forEach(multiply);
  return multiplied;
}

var my_each = function (array, func) {
  for(var i = 0; i<array.length; i++) {
    func(array[i]);
  }
  return array;
}

var inject = function (array, func) {
  var memo = array[0];
  for (var i = 1; i < array.length; i++) {
    memo = func(memo, array[i]);
  }
  return memo;
}

var bubble_sort = function(array, func) {
  var sorted = false;
  while (!sorted) {
    sorted = true;
    for (var i = 0; i<array.length; i++) {
      if (func(array[i],array[i+1]) == 1) {
        var temp = array[i];
        array[i]= array[i+1];
        array[i+1]= temp;
        sorted = false;
      }
    }
  }
  return array;
}

function compare (a,b) {
  if (a > b) { return 1;
  }
  else if (a < b) { return -1;
  }
  else { return 0;
  }
}

function substrings (string) {
  var words = [];
  for (var i = 0; i<string.length; i++) {
    for(var j=i+1; j<string.length; j++) {
      words.push(string.slice(i,j));
    }
  }
  return words;
}

function recursive_sum (array) {
  if (array.length ==1) {
    return array[0];
  }
  else {
    return array[0] + recursive_sum(array.slice(1, array.length));
  }
}

function recursive_exp (base, power) {
  if (power == 0) {
    return 1;
  }
  else if (power == 1) {
    return base;
  }
  else {
    return base * recursive_exp(base, power-1);
  }
}

function recursive_exp_div (base, power) {
  if (power == 0) {
    return 1;
  }
  else if (power == 1) {
    return base;
  }
  else {
    return recursive_exp(base, Math.ceil(power/2)) * recursive_exp(base, Math.floor(power/2));
  }
}

function deepdup (array) {
  var duped = [];
  for (var i = 0; i < array.length; i++) {
    if(array[i] instanceof Array) {
      duped.push(deepdup(array[i]));
    }
    else {
      duped.push(array[i]);
    }
  }
  return duped;
}

function fibonacci (n) {
  if (n == 0) {
    return [];
  }
  else if (n == 1) {
    return [0];
  }
  else if (n == 2) {
    return [0, 1];
  }
  else {
    fibs = fibonacci(n-1);
    new_fib = fibs[(fibs.length - 1)] + fibs [(fibs.length - 2)];
    fibs.push(new_fib);
    return fibs;
  }
}

function binary_search (array, target) {
  var median = Math.floor(array.length/2);
  if ((array.length == 1) && (array[0] != target)) {
    return -1;
  }
  else if (array[median] == target) {
    return median;
  }
  else if (target < array[median]) {
    var pos = binary_search(array.slice(0, median), target);
    return (pos == -1 ? (-1) : (pos));
  }
  else if (target > array[median]) {
    var pos = binary_search(array.slice(median + 1, array.length), target);
    return (pos == -1 ? (-1) : (median + 1 + pos));
  }
}

