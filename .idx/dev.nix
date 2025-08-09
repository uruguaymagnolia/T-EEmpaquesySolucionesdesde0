{ pkgs }: {
  # Para aprender más sobre cómo usar Nix para configurar tu entorno,
  # visita: https://firebase.google.com/docs/studio/customize-workspace

  # Canal de nixpkgs a utilizar.
  channel = "stable-25.05"; # o "unstable"

  # Usa https://search.nixos.org/packages para encontrar paquetes.
  # Se eliminó nodejs (redundante con bun) y python313 (no utilizado).
  packages = [
    pkgs.bun
    pkgs.openssl
    pkgs.netlify-cli
  ];

  # Establece variables de entorno en el espacio de trabajo.
  env = {};

  idx = {
    # Busca las extensiones que desees en https://open-vsx.org/ y usa "publisher.id".
    # Se reemplazaron las extensiones de Python por las esenciales para Next.js/TypeScript.
    extensions = [
      "dbaeumer.vscode-eslint"   # Para linting de código
      "esbenp.prettier-vscode"  # Para formateo de código
      "bradlc.vscode-tailwindcss"  # Para autocompletado y linting de Tailwind CSS
      "ms-python.debugpy"
      "ms-python.python"
    ];

    workspace = {
      # Se ejecuta cuando se crea el espacio de trabajo.
      onCreate = {
        # Instala las dependencias automáticamente al iniciar.
        install-deps = "bun install";
        # Abre un archivo relevante al iniciar.
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };

    # Habilita y personaliza las configuraciones de vista previa.
    previews = {
      enable = true;
      previews = { # Add this nested attribute set
        # Se corrigió la estructura anidada incorrecta.
        web = {
          command = [ "bun" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
 };

  # Los siguientes servicios están comentados ya que no se utilizan en el proyecto actual.
  # Esto acelerará el tiempo de inicio del espacio de trabajo.
  # Si decides usar los Emuladores de Firebase, puedes descomentar esta sección.
  # services.firebase.emulators = {
  #   detect = true;
  #   projectId = "demo-app";
  #   services = [ "auth", "firestore" ];
  # };
}