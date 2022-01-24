import re

if __name__ == "__main__":
    txt = "The rain in Spain"
    x = re.search("^The.*Spain$", txt)
    if (x):
        print(x)
    else:
        print("nah")
