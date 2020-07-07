from random import randint

class Dice:
    def __init__(self, sides=6):
        self.sides = sides

    def roll_dice(self):
        if self.sides == 6:
            print(randint(1, 6))
        elif self.sides == 10:
            print(randint(1, 10))
        elif self.sides == 20:
            print(randint(1, 20))


while True:
    try:
        user_input = int(input('How many faces does a dice have? '))
    except ValueError:
        print("Enter an integer !!!")
        continue
    else:
        user = Dice(user_input)
        
        if user_input == 6 or user_input == 10 or user_input == 20:
            print(f'Random number from a dice with {user_input} faces: ')
            user.roll_dice()
            
            roll_again = input('Do you want to roll again? (yes/no) ')
            
            if roll_again == 'yes':
                continue
            elif roll_again == 'no':
                break
            else:
                break
        else:
            print('Possible values: 6, 10, 20')
            
input("Thanks for the game. Press 'ENTER' to exit.")
