{ pkgs }: {
  deps = [
    pkgs.chromium
    pkgs.chromedriver
    pkgs.nano
    pkgs.sudo
    pkgs.nodejs-16_x
  ];
}