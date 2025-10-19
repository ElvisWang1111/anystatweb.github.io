Installation via Script (Mac)
=============================

This document provides detailed instructions for installing Anystat on macOS using the installation script, which is the recommended installation method for macOS users.

System Requirements
-------------------

- macOS 10.15 (Catalina) or later
- At least 4GB RAM
- 500MB available disk space
- Python 3.9+ (will be checked and installed if necessary)

Step 1: Download the Installation Script
----------------------------------------

1. Visit the `Anystat GitHub repository <https://github.com/anystatweb/Anystat>`_
2. Download the latest installation script for macOS (typically named install_mac.sh)

Step 2: Prepare the Installation
-------------------------------

1. Open Terminal (Applications > Utilities > Terminal)
2. Navigate to the directory where you downloaded the installation script:

   .. code-block:: bash

       cd ~/Downloads

3. Make the script executable:

   .. code-block:: bash

       chmod +x install_mac.sh

Step 3: Run the Installation Script
-----------------------------------

1. Execute the installation script:

   .. code-block:: bash

       ./install_mac.sh

2. Enter your administrator password when prompted
3. The script will:
   - Check if Python is installed and install it if necessary
   - Create a virtual environment
   - Install all required dependencies
   - Install Anystat
   - Create a desktop shortcut if you choose to do so

Step 4: Verify the Installation
-------------------------------

After the script completes, you can verify the installation by running:

.. code-block:: bash

    anystat --version

If the installation is successful, it should display the version information of Anystat.

Step 5: Launch Anystat
----------------------

You can launch Anystat through one of the following methods:

- Double-click the Anystat desktop shortcut (if created)
- Launch from Launchpad (if the option was selected during installation)
- Run `anystat` in Terminal

Step 6: Initial Setup
--------------------

After launching Anystat for the first time, you will need to:

1. Configure API settings (refer to :doc:`First Startup and API Configuration <tutorial_startup>`)
2. Complete the basic settings

Uninstalling Anystat
-------------------

To uninstall Anystat from macOS:

.. code-block:: bash

    pip uninstall anystat

Then delete the virtual environment directory and any desktop shortcuts.

Troubleshooting
---------------

If you encounter any issues during installation:

1. Ensure you have administrator privileges
2. Check if Xcode Command Line Tools are installed:

   .. code-block:: bash

       xcode-select --install

3. If you encounter Python-related issues, consider installing Python using Homebrew:

   .. code-block:: bash

       /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
       brew install python

Next Steps
----------

After successful installation, you can start using Anystat by following:

- :doc:`First Startup and API Configuration <tutorial_startup>`
- :doc:`Data Import Module <tutorial_loading>`