import re

name = input("What's your name? ")

if re.search(r'^erick\s+(.+\s+)*gonçalves$', name, re.IGNORECASE):
    print("Hello " + name.title() + " :D")
else:
    print("Hello " + name.title() + " :(")

