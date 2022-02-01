class Node:
    def __init__(self, data) -> None:
        self.left = None
        self.right = None
        self.data = data
    def PrintData(self):
        print(self.data)
    def InsertData(self, input):
        if input < self.data:
            if not self.left:
                self.left = Node(input)
            else:
                self.left = self.left.InsertData(input)
        else:
            if not self.right:
                self.right = Node(input)
            else:
                self.right = self.right.InsertData(input)
        return self
    def InsertDataClassic(self, input):
        pointer = self
        pointer1 = self
        while pointer:
            pointer1 = pointer
            if input < pointer.data:
                pointer = pointer.left
            else:
                pointer = pointer.right
        if input < pointer1.data:
            pointer1.left = Node(input)
        else:
            pointer1.right = Node(input)
    def InOrder(self):
        if self.left:
            self.left.InOrder()
        print(self.data, end = " ")
        if self.right:
            self.right.InOrder()





if __name__ == "__main__":
    node_numbers = []
    for i in range(1, 6):
        node_numbers.append(int(input(f"Enter number {i}: ")))
    root = Node(node_numbers[0])
    for i in node_numbers[1:5]:
        root.InsertData(i)
    root.InOrder()

    



