
#include <bits/stdc++.h>

using namespace std;

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

string timeConversion(string s) {
    string timeOfDay = "";
    if (regex_match (s, regex("(.*)(AM$)") ))
        timeOfDay = "AM";
    else
        timeOfDay = "PM";

    int firstDigits = stoi(s);

    if (timeOfDay == "AM" && firstDigits == 12)
        firstDigits -= 12;
    else if (timeOfDay == "PM" && firstDigits != 12)
        firstDigits += 12;

    string convertedDigits = to_string(firstDigits);
    if (firstDigits < 10)
        convertedDigits.insert(0, "0");
    s.replace(0, 2, convertedDigits);

    // Removing the AM/PM
    // In a real program, we should split this function
    s.pop_back();
    s.pop_back();
    return s;
}


int main()
{
    ofstream fout(getenv("OUTPUT_PATH"));

    string s;
    getline(cin, s);

    string result = timeConversion(s);

    fout << result << "\n";

    fout.close();

    return 0;
}

