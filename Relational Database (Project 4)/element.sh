#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=periodic_table --tuples-only -c"
if [[ -z $1 ]]
then
  echo -e "Please provide an element as an argument."
else
  FINDING_THE_ARGUMENT=$($PSQL "SELECT properties.atomic_number, name, symbol, types.type, atomic_mass, melting_point_celsius, boiling_point_celsius  FROM elements INNER JOIN properties on elements.atomic_number = properties.atomic_number INNER JOIN types ON properties.type_id = types.type_id WHERE elements.name = '$1' OR elements.symbol = '$1' OR properties.atomic_number::TEXT = '$1'")
  if [[ -z $FINDING_THE_ARGUMENT ]]
  then
    echo "I could not find that element in the database."
  else 
    echo "$FINDING_THE_ARGUMENT" | while read ATOMIC_NUMBER BAR NAME BAR SYMBOL BAR TYPE BAR ATOMIC_MASS BAR MELTING_POINT BAR BOILING_POINT 
    do
    echo "The element with atomic number $ATOMIC_NUMBER is $NAME ($SYMBOL). It's a $TYPE, with a mass of $ATOMIC_MASS amu. $NAME has a melting point of $MELTING_POINT celsius and a boiling point of $BOILING_POINT celsius."
    done
  fi
fi
