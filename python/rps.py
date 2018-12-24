#!/usr/bin/env python3

"""This program plays a game of Rock, Paper, Scissors between two Players,
and reports both Player's scores each round."""

import random

moves = ['rock', 'paper', 'scissors']

"""The Player class is the parent class for all of the Players
in this game"""


class Player:
    def move(self):
        return 'rock'

    def learn(self, my_move, their_move):
        pass

class RandomPlayer(Player):
    def __init__(self):
        super().__init__()

    def move(self):
        return random.choice(moves)

    def learn(self, my_move, their_move):
        pass

class ReflectPlayer(Player):
    def __init__(self):
        super().__init__()

    def move(self):
        return random.choice(moves)

    def learn(self, my_move, their_move):
        pass

class HumanPlayer(Player):

    def move(self):
        while True:
            string = input("rock, paper, scissors? ")
            if string.lower() not in moves:
                print("Please choose rock, paper or scissors.")
            else:
                break
        return string

    def learn(self, my_move, their_move):
        pass

def beats(one, two):
    return ((one == 'rock' and two == 'scissors') or
            (one == 'scissors' and two == 'paper') or
            (one == 'paper' and two == 'rock'))

class Game:
    def __init__(self, p1, p2):
        self.p1 = p1
        self.p2 = p2
        self.count_win = 0
        self.count_loss = 0
        self.count_tie = 0

    def play_round(self):
        move1 = self.p1.move()
        move2 = self.p2.move()
        print(f"\nPlayer 1: {move1}  Player 2: {move2}")
        if beats(move1, move2):
            self.count_win += 1
        elif beats(move2, move1):
            self.count_loss += 1
        else:
            self.count_tie += 1
        print(f"\nScore - Player 1: {self.count_win} Player 2: {self.count_loss} Tie: {self.count_tie}\n\n")
        self.p1.learn(move1, move2)
        self.p2.learn(move2, move1)

    def play_game(self):
        print("Game start!")
        for round in range(3):
            print(f"Round {round}:")
            self.play_round()
        if self.count_win > self.count_loss:
            print("Game over. Player 1 wins.")
        elif self.count_win < self.count_loss:
            print("Game over. Player 2 wins.")
        else:
            print("Game over. Player 1 ties Player 2.")

if __name__ == '__main__':
    game = Game(HumanPlayer(), RandomPlayer())
    game.play_game()
