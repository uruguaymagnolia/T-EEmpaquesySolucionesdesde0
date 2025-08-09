#!/usr/bin/env python
import subprocess
import sys
import os

def run_script(script_path):
    """Ejecuta un script de Python y maneja los errores."""
    script_name = os.path.basename(script_path)
    try:
        print(f"--- Ejecutando {script_name} ---")
        # Usamos sys.executable para asegurarnos de que se use el mismo intérprete de Python
        # y especificamos el directorio de trabajo para que los scripts encuentren sus archivos.
        result = subprocess.run(
            [sys.executable, script_path], 
            check=True, 
            capture_output=True, 
            text=True,
            cwd=os.path.dirname(os.path.abspath(__file__)) # Ejecutar desde el directorio del script
        )
        print(result.stdout)
        if result.stderr:
            print("--- Salida de error (puede ser informativo) ---")
            print(result.stderr)
        print(f"--- {script_name} finalizado exitosamente ---\n")
    except subprocess.CalledProcessError as e:
        print(f"!!! Error al ejecutar {script_name} !!!")
        print(f"--- Salida estándar ---")
        print(e.stdout)
        print(f"--- Error estándar ---")
        print(e.stderr)
        print(f"--- {script_name} finalizó con errores ---\n")
    except FileNotFoundError:
        print(f"!!! Error: El script {script_path} no fue encontrado. !!!\n")

def main():
    """Función principal para ejecutar todos los scripts."""
    # Obtener la ruta del directorio donde se encuentra este script
    script_dir = os.path.dirname(os.path.abspath(__file__))
    
    # Lista de scripts a ejecutar en orden
    scripts_to_run = [
        os.path.join(script_dir, 'public.py'),
        os.path.join(script_dir, 'estructura.py'),
        os.path.join(script_dir, 'config.py')
    ]
    
    for script in scripts_to_run:
        run_script(script)

if __name__ == '__main__':
    main()
