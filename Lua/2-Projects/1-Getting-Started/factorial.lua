function Factorial (n)
  if n == 0 then
    return 1
  elseif n < 0 then
    print("ERROR: Negative number.") -- Fixes it for exercise 1.1
  else
    return n * Factorial(n - 1)
  end
end

print("Enter a number: ")
local num = io.read("*n")
print(Factorial(num))
