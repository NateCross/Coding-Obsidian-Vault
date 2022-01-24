def basic_print_grid(input_grid):
    for i in input_grid:
        for j in i:
            print(j, end = " ")
        print()

def modified_print_grid(input_grid):
    rows = len(input_grid)
    columns = len(input_grid[rows - 1])
    for i in range(columns):
        for j in range(rows):
            print(input_grid[j][i], end = " ")
        print()

if __name__ == "__main__":
    grid = [['.', '.', '.', '.', '.', '.'],
            ['.', 'O', 'O', '.', '.', '.'],
            ['O', 'O', 'O', 'O', '.', '.'],
            ['O', 'O', 'O', 'O', 'O', '.'],
            ['.', 'O', 'O', 'O', 'O', 'O'],
            ['O', 'O', 'O', 'O', 'O', '.'],
            ['O', 'O', 'O', 'O', '.', '.'],
            ['.', 'O', 'O', '.', '.', '.'],
            ['.', '.', '.', '.', '.', '.']]
    basic_print_grid(grid)
    print()
    modified_print_grid(grid)
