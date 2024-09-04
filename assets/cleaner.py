import json
import re


def remove_leading_spaces_in_title_and_lyrics(json_file_path):
    # Load the JSON data from the file
    with open(json_file_path, "r") as file:
        data = json.load(file)

    # Iterate through each song book in the data
    for book_name, songs in data.items():
        # Iterate through each song in the song book
        for song in songs:
            # Remove leading spaces in the title
            if "Title" in song:
                song["Title"] = song["Title"].lstrip()

            # Remove leading spaces in the lyrics, including spaces after \n
            if "Lyrics" in song:
                song["Lyrics"] = song["Lyrics"].lstrip()
                song["Lyrics"] = re.sub(r"\n\s+", "\n", song["Lyrics"])

    # Save the modified JSON data back to a file
    with open("modified_" + json_file_path, "w") as file:
        json.dump(data, file, indent=4)


# Replace 'your_file.json' with your actual JSON file name
remove_leading_spaces_in_title_and_lyrics("data.json")
