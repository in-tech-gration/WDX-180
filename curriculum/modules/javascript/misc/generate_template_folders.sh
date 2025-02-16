#!/bin/bash

# Define the source markdown files for content
CONTENT1_FILE="_w19d01/_w19d01.md"
CONTENT2_FILE="_w19d02/_w19d02.md"

# Check if the source files exist
if [[ ! -f "$CONTENT1_FILE" || ! -f "$CONTENT2_FILE" ]]; then
  echo "Error: One or both content source files are missing."
  exit 1
fi

# Read content from the markdown files
CONTENT1=$(cat "$CONTENT1_FILE")
CONTENT2=$(cat "$CONTENT2_FILE")

# Loop through the range for XX (20 to 36)
for XX in {20..36}; do
  # Loop through the range for YY (01 to 05)
  for YY in {01..05}; do
    
    # Create the folder name
    FOLDER_NAME="_w${XX}d${YY}"
    mkdir -p "$FOLDER_NAME"
    
    # Create the markdown file inside the folder
    FILE_PATH="$FOLDER_NAME/_w${XX}d${YY}.md"
    
    # Choose the correct content based on YY
    if [[ "$YY" == "01" || "$YY" == "03" || "$YY" == "05" ]]; then
      echo -e "$CONTENT1" > "$FILE_PATH"
    else
      echo -e "$CONTENT2" > "$FILE_PATH"
    fi
  done
done

echo "Folders and markdown files created successfully."
