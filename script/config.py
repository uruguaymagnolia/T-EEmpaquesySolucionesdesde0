#!/usr/bin/env python
import os
import json

def get_config_structure_and_content():
    """
    Reads specified config files and returns a dictionary 
    representing their structure and content.
    """
    config_files = [
        'package.json',
        'postcss.config.mjs',
        'tailwind.config.ts',
        'prisma/schema.prisma'
    ]
    
    structure_dict = {
        'name': 'config_files',
        'type': 'collection',
        'children': []
    }

    for file_path in config_files:
        if os.path.exists(file_path):
            try:
                with open(file_path, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                file_info = {
                    'name': os.path.basename(file_path),
                    'path': file_path,
                    'type': 'file',
                    'content': content
                }
                structure_dict['children'].append(file_info)
            except Exception as e:
                print(f"Error reading file '{file_path}': {e}")
        else:
            print(f"Warning: File not found and will be skipped: '{file_path}'")
            
    return structure_dict

def main():
    """
    Main function to generate the JSON file describing the config files.
    """
    output_dir = 'script/estructura'
    output_file_path = os.path.join(output_dir, 'estructura_config.json')

    # Ensure the output directory exists
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Output directory created at: '{output_dir}'")

    print("Generating config structure and content...")
    structure = get_config_structure_and_content()

    try:
        with open(output_file_path, 'w', encoding='utf-8') as f:
            json.dump(structure, f, indent=2, ensure_ascii=False)
        print(f"Structure saved successfully to '{output_file_path}'")
    except IOError as e:
        print(f"Error writing to file '{output_file_path}': {e}")


if __name__ == '__main__':
    main()
