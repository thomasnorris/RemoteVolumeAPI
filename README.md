## Installation
- Clone the repository with `git clone --recurse-submodules` to update submodules.
- After cloning:
    - Run `npm install` to install packages.
    - Follow the [Node-Logger readme](https://github.com/thomasnorris/Node-Logger) for instructions on setting up the logger.
    - In the `config` folder:
        - Copy/rename `config_template.json` to `config.json`.
        - Configure `config.json`.
    - In the `scripts` folder:
        - Make sure that the scripts that these files call exist.

## Usage
- Create a shortcut for `scripts/LAUNCH.bat` and place in a desired location.
- Edit this shortcut:
    - In the `Target:` field, append the directory of the `node.exe` executable
- Run the shortcut to start.
- Endpoints can be called using `curl`, [Postman](https://www.postman.com/), etc.