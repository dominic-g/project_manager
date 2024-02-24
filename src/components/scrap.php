<?php

function processJsonFilesInFolder() {
    // Get the path to the 'LoanDetails' folder
    $folderPath = __DIR__ . '/LoanDetails';

    // Check if the folder exists
    if (is_dir($folderPath)) {
        // Get all JSON files in the folder
        $jsonFiles = glob($folderPath . '/*.json');

        // Loop through each JSON file
        foreach ($jsonFiles as $jsonFile) {
            // Read the contents of the JSON file
            $jsonContents = file_get_contents($jsonFile);

            // Convert JSON to array
            $dataArray = json_decode($jsonContents, true);

            // Check if the JSON decoding was successful
            if ($dataArray['Data'] !== null) {
                // Process the array as needed
                // For example, you can print it
                echo "File: $jsonFile ". $dataArray['Data']['__type']."\n";
                // print_r($dataArray);
                echo "\n";
            } else {
                // Handle JSON decoding error
                echo "Error decoding JSON in file: $jsonFile\n";
            }
        }
    } else {
        // Handle the case where the 'LoanDetails' folder doesn't exist
        echo "The 'LoanDetails' folder does not exist.\n";
    }
}

// Call the function to process JSON files in the 'LoanDetails' folder
processJsonFilesInFolder();

?>
