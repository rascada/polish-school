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
