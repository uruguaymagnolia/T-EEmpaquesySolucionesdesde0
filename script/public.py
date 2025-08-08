#!/usr/bin/env python
import os
import json

def get_dir_structure(rootpath):
    """
    Recorre recursivamente un directorio y devuelve un diccionario 
    que representa la estructura de carpetas y archivos.
    """
    dir_structure = {
        'name': os.path.basename(rootpath),
        'type': 'directory',
        'children': []
    }

    try:
        # Ordenar el contenido del directorio para una salida consistente
        dir_contents = sorted(os.listdir(rootpath))
    except OSError:
        # Si el directorio no es accesible, devuelve la estructura vacía
        return dir_structure

    for item in dir_contents:
        item_path = os.path.join(rootpath, item)
        if os.path.isdir(item_path):
            dir_structure['children'].append(get_dir_structure(item_path))
        else:
            dir_structure['children'].append({'name': item, 'type': 'file'})

    return dir_structure

def main():
    """
    Función principal para generar el archivo JSON que describe el directorio 'public'.
    """
    public_path = 'public'
    output_dir = 'script/estructura'
    output_file_path = os.path.join(output_dir, 'estructura_public.json')

    if not os.path.isdir(public_path):
        print(f"Error: El directorio fuente '{public_path}' no se encontr\u00f3.")
        return

    # Asegurarse de que el directorio de salida exista
    if not os.path.exists(output_dir):
        os.makedirs(output_dir)
        print(f"Directorio de salida creado en: '{output_dir}'")

    print(f"Generando estructura de directorios para '{public_path}'...")
    structure = get_dir_structure(public_path)

    try:
        with open(output_file_path, 'w', encoding='utf-8') as f:
            json.dump(structure, f, indent=2, ensure_ascii=False)
        print(f"Estructura guardada exitosamente en '{output_file_path}'")
    except IOError as e:
        print(f"Error al escribir en el archivo '{output_file_path}': {e}")


if __name__ == '__main__':
    main()
