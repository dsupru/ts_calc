const pl_min: Array<string> = ['+' , '-'];
const mul_div: Array<string> = ['*' , '/'];
const signs: Array<string> = ['+' , '-' , '*' , '/'];

function combine(left:string, op:string, right:string) : string {
   let result: string;
   if (op == '/') {
      result = String(Number(left) / Number(right));
   } else {
      result = String(Number(left) * Number(right));
   }
   return result;
}
function calc(in_str: string): number {
   in_str += ' ';
   let left: string = '';
   let right: string = '';
   let operator: string = '';
   let g_op: string = ''
   let accumulated_val: string = '';
   for (let i: number = 0; i < in_str.length; i++) {
      while (i < in_str.length && pl_min.includes(in_str[i]) == false) {
         if (mul_div.includes(in_str[i]) == true) {
            if (operator != '') {
               left = combine(left, operator, right);
               right = '';
            }
            operator = in_str[i];
         } else {
            if (operator == '') {
               left += in_str[i];
            } else {
               right += in_str[i];
            }
         }
         i += 1;
      }
      if (right !== '') {
         left = combine(left, operator, right);
         right = '';
      }
      if (accumulated_val === ''){
         accumulated_val = left;
      } else {
         if (g_op == '+') {
            accumulated_val = String(Number(accumulated_val) + Number(left));
         } else {
            accumulated_val = String(Number(accumulated_val) - Number(left));
         }
      }
      left = '';
      operator = '';
      if (i === in_str.length) {
         break;
      }
      g_op = in_str[i];
   }
   return Number(accumulated_val);
}

console.log(calc('3+5*3-4*4'));
console.log(calc('3*5*3/4'));
console.log(calc('3+5*3/4+4'));
console.log(calc('3*2+5*3-40/4'));
console.log(calc('3*2*9+5*3/2-40/4*34'));
