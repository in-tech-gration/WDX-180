echo $1;

# TODO: Check if we are in the correct directory: /user/
# echo `pwd`;

for i in $(seq -f "%02g" 1 5)
do
    mkdir "../user/week$1/exercises/day$i"; 
    touch "../user/week$1/exercises/day$i/README.md"; 
done
