class Node:
    def __init__(self, data):
        self.left = None
        self.right = None
        self.Set_Node(data)
    def Set_Node(self, data):
        self.data = data
    def Get_Node(self):
        return self.data
    def Print_Tree(self):
        print(self.data)
    def Insert_Node(self, data):
        self.left = Node(data)

if __name__ == "__main__":
    root = Node(5)
    root.Insert_Node(4)
    root.Print_Tree()
    root.left.Print_Tree()
