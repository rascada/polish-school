# polish-school
Collection of exercises from school (when I have 18 years old)

In Polish school we:
- can't use `console`
- most of the time we can't use arrays, functions and objects
- can't use es6
- don't know what dom is
- use `document.write`
- use `<frame>` tag
- mostly work with `<table> </table>` tag

## example
### even or odd solution
#### they learn us:
```javascript
function evenOrOdd(a)
{
	if(a%2==0)
	{
	  document.write("even");
	}
	else
	{
	  document.write("odd");
	}
}

var x=parseFloat(prompt("Provide number ",""));
evenOrOdd(x)
```
#### when I prefer
```javascript
let evenOrOdd = n => n % 2 == 0 ? 'even' : 'odd';

evenOrOdd(+prompt('Provide number'));
```
