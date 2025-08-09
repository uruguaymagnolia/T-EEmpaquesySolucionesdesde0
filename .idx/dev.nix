{ pkgs }: {
  # To learn more about how to use Nix to configure your environment
  # see: https://firebase.google.com/docs/studio/customize-workspace

  # Which nixpkgs channel to use.
  channel = "stable-25.05"; # or "unstable"

  # Use https://search.nixos.org/packages to find packages
  packages = [
    pkgs.nodejs
    pkgs.openssl
    pkgs.bun
    pkgs.python313
    pkgs.netlify-cli
  ];

  # Sets environment variables in the workspace
  env = {};

  idx = {
    # Search for the extensions you want on https://open-vsx.org/ and use "publisher.id"
  extensions = [
      "dbaeumer.vscode-eslint"   # Para linting de código
      "esbenp.prettier-vscode"  # Para formateo de código
      "bradlc.vscode-tailwindcss"  # Para autocompletado y linting de Tailwind CSS
      "ms-python.debugpy"
      "ms-python.python"
    ];

    workspace = {
      # Runs when a workspace is created
      onCreate = {
        default.openFiles = [
          "src/app/page.tsx"
        ];
      };
    };

    # Enable previews and customize configuration
    previews = {
      enable = true;
      previews = {
        web = {
          command = [ "bun" "run" "dev" "--" "--port" "$PORT" "--hostname" "0.0.0.0" ];
          manager = "web";
        };
      };
    };
  };

  # The following services are commented out as they are not used in the current project.
  # This will speed up workspace startup time.
  # If you decide to use Firebase Emulators, you can uncomment this section.
  # services.firebase.emulators = {
  #   detect = true;
  #   projectId = "demo-app";
  #   services = [ "auth", "firestore" ];
  # };
}
