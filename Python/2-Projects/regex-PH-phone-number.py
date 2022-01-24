# This program aims to check if a given
# Philippines phone number is valid, by asking for input
# from the user and matching it to Regular Expression patterns
# as defined in the Phone_Checker class.
# It also checks for the provider of the number.

import re


class Phone_Checker:

    # Pseudo-constants which are regex patterns
    COUNTRY_CODE_DIGITS = "^(\\+63|0) ?"
    SMART_OR_TNT = (
        "\\(?9(0[7-9]|1[012349]|2[019]|3[089]|4[06789]|5[01]|6[0189]|7[0-1]|8[129]|9[289])\\)? ?"
    )
    GLOBE_OR_TM = "\\(?9(06|6[34567]|75|9[457]|1[5678]|2[678]|3[56]|45|5[3456])\\)? ?"
    SUN = "\\(?9(72|2[2345]|3[1234]|4[1234]|52|62)\\)? ?"
    END_DIGITS = "\\d{3} ?\\d{4}$"
    VALID_PHONE_NUM = "^(\\+63|0) ?\\(?\\d{3}\\)? ?\\d{3} ?\\d{4}$"

    def __init__(self, phone_number):
        self.phone_number = phone_number
        self.provider = ""

    def check_number(self):
        if re.search(self.VALID_PHONE_NUM, self.phone_number):
            return True
        else:
            return False

    def check_provider(self):
        if not self.check_number():
            exit
        self.is_Smart_or_TNT()
        self.is_Globe_or_TM()
        self.is_Sun()

    def is_Smart_or_TNT(self):
        if re.search(
            self.COUNTRY_CODE_DIGITS + self.SMART_OR_TNT + self.END_DIGITS,
            self.phone_number,
        ):
            self.provider = "Smart or TNT"

    def is_Sun(self):
        if re.search(
            self.COUNTRY_CODE_DIGITS + self.SUN + self.END_DIGITS,
            self.phone_number,
        ):
            self.provider = "Sun"

    def is_Globe_or_TM(self):
        if re.search(
            self.COUNTRY_CODE_DIGITS + self.GLOBE_OR_TM + self.END_DIGITS,
            self.phone_number,
        ):
            self.provider = "Globe or TM"


if __name__ == "__main__":
    input_phone_number = input("Enter your PH phone number: ")
    checked_number = Phone_Checker(input_phone_number)
    if checked_number.check_number():
        print("Phone number is valid.")
        checked_number.check_provider()
        print(f"Provider is: {checked_number.provider}")
    else:
        print("Phone number is invalid.")
