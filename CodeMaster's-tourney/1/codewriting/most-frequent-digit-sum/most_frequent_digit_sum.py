from collections import Counter
def mostFrequentDigitSum(n):
    C = Counter(f(x) for x in S(n))
    return C.most_common()[0][0]

def f(x):
    return sum(int(e) for e in str(x))
    
def S(x):
    e = []
    while x > 0:
        e.append(x)
        x = s(x)
        
    return e

def s(x):
    return x - f(x)
    
