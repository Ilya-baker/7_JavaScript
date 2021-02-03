// Задача 4. 
// *Нарисовать пирамиду с помощью console.log, как показано на рисунке, 
// только у вашей пирамиды должно быть 20 рядов, а не 5:
// x
// xx
// xxx
// xxxx
// xxxxx

listX = []

for (let i = 0; i < 20; 
  listX.push('x'), 
  console.log(listX.join('')), 
  i++
  );