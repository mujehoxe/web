var hello = 'hello world';
var num = 42;

var a = [42, 'hi', hello, num, true];

a.splice(1, 2, 'Feb');

console.log(a.slice(0, 2).concat(['h']).concat(a.slice(2)));
a.push(50);
console.log(a.slice(1));
a.pop();
console.log(a.slice(1));
a.unshift([50, 3, 10]);
console.log(a);
console.log(a[0][2]);
console.log(a.join('|'));
console.log([5, 3, 10].concat(a));

if ('Hi'.endsWith('H')) {
  console.log('H');
} else {
  console.log('i');
}

// var age = 0;
// while (age >= 0) {
//   age = prompt();
//   if (!isNaN(age)) {
//     if (age < 5) {
//       console.log('infant');
//     } else if (age < 12) {
//       console.log('child');
//     } else if (age < 18) {
//       console.log('teen');
//     } else {
//       console.log('adult');
//     }
//   }
// }

for (var i = 0; i < 5; i++) console.log('hello', i);

var j = 0;
while (j < 5) {
  console.log('hello', j);
  j++;
}

for (var i = 0; i < a.length; i++) {
  if (a[i] == 42) console.log(a[i]);
}

var j = 0;
while (j < 5) {
  console.log(a[j]);
  j++;
}

var employee = {
  nom: 'mohamed',
  age: 25,
  birthday: new Date('December 17, 1995 03:24:00'),
  diplomes: ['licence', 'master'],
  salair: 60000,
  adress: {street: 'beziwash', province: 'medea', country: 'algeria'},
};

console.log('****', employee.birthday.getDay());

var employees = [
  employee,
  {nom: 'ahmed', age: 40, salair: 70000},
  {nom: 'islam', age: 20, salair: 35000},
];
console.log(Object.values(employee));

var keys = Object.keys(employee);
for (var i = 0; i < keys.length; i++) {
  console.log(keys[i], ':', employee[keys[i]]);
}
