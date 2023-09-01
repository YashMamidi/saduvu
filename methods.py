'''
a= "google"
print(a.upper())

a= "google"
print(a.lower())

a= "google"
print(a.capitalize())

a= "google"
print(a.isalnum())

k = [] #emptylist
k.append("yash")
print(k)
----
k = ["harshu","sir","madam","munisir"] #emptylist
k.append("yash")
print(k)

k = ["harshu","sir","madam","munisir"]
k.pop()
print(k)
o/p=['harshu', 'sir', 'madam']
k = ["harshu","sir","madam","munisir"]
k.remove("sir")
print(k)
o/p: ['harshu', 'madam', 'munisir']

k = ["harshu","sir","madam","munisir"]
k.clear()
print(k)
o/p= []

k = ["harshu","sir","madam","munisir"]
print(k.index("munisir"))
o/p=3

k = ["harshu","sir","madam","munisir","sir"]
print(k.count("sir"))
#o/p=2


k = ["harshu","sir","madam","munisir","sir"]
l=[1,2,3,4,5]
k.extend(l)
print(k)
#o/p=['harshu', 'sir', 'madam', 'munisir', 'sir', 1, 2, 3, 4, 5]


l = list(input())
print(l)

'''
