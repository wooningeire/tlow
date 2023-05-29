f=n=>{a=[];b=2*(n>0)-1;for(i=0;i<n+b;i+=b)if(!(i%3)^!(i%5))a.push(i);return a}
f=function*(n){b=2*(n>0)-1;for(i=0;i<n+b;i+=b)if(!(i%3)^!(i%5))yield i}
f=n=>{return[...Array(Math.abs(n)).keys()].map(x=>{if(!(x%3)^!(x%5))return x})}