# Blind Wordle Game

class BlindleGame:
    @staticmethod
    def load_dictionary():
        with open('dict.txt', 'r') as dictionary_file:
            return (dictionary_file.read()).split()

    @staticmethod
    def treat_guess(guess, answer):
        guess = list(guess)
        answer = list(answer)
        verdict = ['-' for _ in range(5)]

        for ind in range(5):
            if answer[ind] == guess[ind]:
                verdict[ind] = '✓'
                answer[ind] = ''
            elif guess[ind] not in answer:
                verdict[ind] = 'x'

        for ind in range(5):
            if verdict[ind] != '-':
                continue
            if guess[ind] in answer:
                verdict[ind] = '?'
                answer.remove(guess[ind])
            else:
                verdict[ind] = 'x'

        return [''.join(guess), ''.join(verdict)]

    @staticmethod
    def print_game_rules():
        print('In the game Bindle your goal is to guess the English word of five letters in 6 moves.\n'
              'Unlike the Wordle game, the verdicts for each word will be given after the sixth one is entered.\n'
              'After that, you will have one attempt to guess the word based on the available verdicts.')
        print('\nExplanation of verdicts\n'
              'x - failure, no such letter in this word\n'
              '? - entered letter exists in riddled word, but on another position\n'
              '✓ - guessed, entered letter is on correct position.')

    @staticmethod
    def print_attempts(attempts):
        print('\nLet\'s check Your verdicts!')
        for move in range(len(attempts)):
            print(f'{move + 1}: {attempts[move][0]} - {attempts[move][1]}')
        print()

    def __init__(self):
        self.game_dictionary = self.load_dictionary()

        from googletrans import Translator
        self.game_translator = Translator()

    def translate(self, word):
        return (self.game_translator.translate(word, dest='ru')).text

    def check_word(self, word):
        if len(word) != 5:
            return False
        if word not in self.game_dictionary:
            return False
        return True

    def generate_word(self):
        from random import choice
        return choice(self.game_dictionary)

    def user_guess(self, move):
        guess = input(f'Enter Your word No. {move}: ').lower()
        while not self.check_word(guess):
            print('This word doesn\'t exist!')
            guess = input(f'Enter Your word No. {move}: ').lower()
        return guess

    def start_game(self):
        self.print_game_rules()

        print('\nThe game begins!\n')

        user_win = False
        target_word = self.generate_word()
        attempts = list()

        for move in range(1, 7):
            current_guess = self.user_guess(move)
            attempts.append(self.treat_guess(current_guess, target_word))
            if current_guess == target_word:
                user_win = True

        self.print_attempts(attempts)
        if user_win:
            print('You win!')
        else:
            print('Now You have last attempt to guess the word.')
            last_attempt = self.user_guess(7)
            if last_attempt == target_word:
                print('You win!')
            else:
                print('You lose!')
        print(f'The word \'{target_word}\' was riddled.')
        print(f'In Russian it means \'{self.translate(target_word)}\'.')


if __name__ == '__main__':
    blindle = BlindleGame()
    blindle.start_game()
