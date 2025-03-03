#!/bin/bash
PSQL="psql -X --username=freecodecamp --dbname=salon --tuples-only -c"
echo -e "\n~~~~~ MY SALON ~~~~~\n"
MAIN_MENU() {
  echo -e "Welcome to My Salon, how can I help you?\n"
  SERVICES_LIST=$($PSQL"SELECT * FROM services")
  echo "$SERVICES_LIST" | while read SERVICE_ID BAR SERVICE_NAME
  do
    echo -e "$SERVICE_ID) $SERVICE_NAME"
  done
  read SERVICE_ID_SELECTED
  SERVICE_CHOSEN_ID=$($PSQL"SELECT service_id FROM services WHERE service_id = $SERVICE_ID_SELECTED")
  if [[ -z $SERVICE_CHOSEN_ID ]]
  then
    MAIN_MENU "I could not find that service."
  else
    SERVICE_NAME=$($PSQL"SELECT name FROM services WHERE service_id=$SERVICE_CHOSEN_ID")
    echo -e "\nWhat's your phone number?"
    read CUSTOMER_PHONE
    CUSTOMER_ID=$($PSQL"SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")
    if [[ -z $CUSTOMER_ID ]]
      then
        echo -e "\nI don't have a record for that phone number, what's your name?"
        read CUSTOMER_NAME
        INSERT_DATA=$($PSQL"INSERT INTO customers(name, phone) VALUES('$CUSTOMER_NAME','$CUSTOMER_PHONE')")
        CUSTOMER_ID=$($PSQL"SELECT customer_id FROM customers WHERE phone = '$CUSTOMER_PHONE'")
      fi
      CUSTOMER_NAME=$($PSQL"SELECT name FROM customers WHERE customer_id = $CUSTOMER_ID")
      echo -e "\nWhat time would you like your $SERVICE_NAME, $CUSTOMER_NAME?"
      read SERVICE_TIME
      SERVICE_TIME_INSERTION=$($PSQL"INSERT INTO appointments(time,customer_id,service_id) VALUES('$SERVICE_TIME',$CUSTOMER_ID, $SERVICE_ID_SELECTED)")
      echo -e "\nI have put you down for a$SERVICE_NAME at $SERVICE_TIME,$CUSTOMER_NAME."
  fi
}
MAIN_MENU
