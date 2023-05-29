def f(n):n,o=sorted(0,n+1);return[x for x in range(n,o)if(x%5<1)^x%3<1]
def f(n):a=(n>0)*2-1;return[x for x in range(0,n+a,a)if(x%5<1)^x%3<1]
def f(n):return[x for x in range(min(0,n),max(0,n+1))if(x%5<1)^x%3<1]