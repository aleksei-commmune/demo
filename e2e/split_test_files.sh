# #!/bin/bash

input_file=specs
num_files=$1

# List all spec files
find e2e/cypress/e2e -type f -name "*.cy.js" > $input_file

# Split specs into chunks
total_lines=$(wc -l < $input_file)
lines_per_file=$((total_lines / num_files))
remainder=$((total_lines % num_files))

if [ $remainder -gt 0 ]; then
    lines_per_file=$((lines_per_file + 1))
fi

mkdir -p tmp
gsplit --lines=$lines_per_file $input_file "./tmp/spec_" --numeric-suffixes=1
