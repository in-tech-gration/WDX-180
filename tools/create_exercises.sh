# Usage: $ /tools/> ./create_exercises.sh 36
# Will create 5 folders under ./user/week36/exercises/ and touch an empty README.md file:
# ./user/week36/exercises/day01/README.md
# ./user/week36/exercises/day02/README.md
# ./user/week36/exercises/day03/README.md
# ./user/week36/exercises/day04/README.md
# ./user/week36/exercises/day05/README.md

# TODO: Check if we are in the correct directory: /user/
# echo `pwd`;

for i in $(seq -f "%02g" 1 5)
do
    mkdir "../user/week$1/exercises/day$i"; 
    touch "../user/week$1/exercises/day$i/README.md"; 
done
