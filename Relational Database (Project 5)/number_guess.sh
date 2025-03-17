#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=game -t --no-align -c"


echo -e "\nEnter your username:"
read USERNAME

USER_DATA=$($PSQL "SELECT username, games_played, best_game, user_id FROM data WHERE username='$USERNAME'")

if [[ -z $USER_DATA ]]
then
  ADD_NAME=$($PSQL "INSERT INTO data(username) VALUES('$USERNAME')")
  echo -e "\n Welcome, $USERNAME! It looks like this is your first time here."

  USER_ID=$($PSQL "SELECT user_id FROM data WHERE username='$USERNAME'")
  BESTG=1000
  GAMESP=0
else
  IFS="|" read USERNAME GAMESP BESTG USER_ID <<< "$USER_DATA"
  echo -e "Welcome back, $USERNAME! You have played $GAMESP games, and your best game took $BESTG guesses."
fi

RANDOM_NUMBER=$(($RANDOM % 1000 + 1))
GUESS=1

echo -e "\nGuess the secret number between 1 and 1000:"
read GUESSED_NUMBER

while [[ $GUESSED_NUMBER -ne $RANDOM_NUMBER ]]
do
  if [[ ! $GUESSED_NUMBER =~ ^[0-9]+$ ]]
    then
    echo -e "\nThat is not an integer, guess again:"
    elif [[ $GUESSED_NUMBER -gt $RANDOM_NUMBER ]]
    then
      echo -e "\nIt's lower than that, guess again:"
    else 
      echo -e "\nIt's higher than that, guess again:"
  fi

  read GUESSED_NUMBER
  ((GUESS++))
done

MODIFY=$($PSQL "UPDATE data SET games_played = games_played + 1 WHERE username = '$USERNAME'")



if [[ $GUESS -lt $BESTG ]]
then
  MODIFY=$($PSQL "UPDATE data SET best_game = $GUESS WHERE username = '$USERNAME'")
fi

echo -e "\nYou guessed it in $GUESS tries. The secret number was $RANDOM_NUMBER. Nice job!"
