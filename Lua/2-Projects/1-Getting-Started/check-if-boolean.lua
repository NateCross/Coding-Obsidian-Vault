function CheckBool (var)
  if var or not var then
    print("True")
  else
    print("Nah")
  end
end

print("Enter a variable: ")
-- local num = io.read("*n")
local num = true
CheckBool(num)
