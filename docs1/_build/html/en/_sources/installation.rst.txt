Installation from Source
=======================

This document provides detailed instructions for compiling and installing Anystat from source code, suitable for users who want to use the latest features or customize the software.

Preparation
------------

Before starting the installation, please ensure your system meets the following requirements:

- Python 3.9 or higher
- Git
- Dependencies listed in requirements.txt

Step 1: Clone the Repository
----------------------------

First, clone the Anystat source code repository to your local machine:

.. code-block:: bash

    git clone https://github.com/anystatweb/Anystat.git
    cd Anystat

Step 2: Set Up the Python Environment
-------------------------------------

We recommend using a virtual environment to avoid conflicts with other Python packages. You can use venv or conda:

Using venv:

.. code-block:: bash

    python -m venv venv
    # Activate the virtual environment
    # On Windows:
    venv\Scripts\activate
    # On macOS/Linux:
    source venv/bin/activate

Using conda:

.. code-block:: bash

    conda create -n anystat python=3.9
    conda activate anystat

Step 3: Install Dependencies
----------------------------

Install all required dependencies using pip:

.. code-block:: bash

    pip install -r requirements.txt

Step 4: Install Anystat
------------------------

Install Anystat in development mode:

.. code-block:: bash

    pip install -e .

Step 5: Verify the Installation
-------------------------------

After installation is complete, you can verify it by running:

.. code-block:: bash

    anystat --version

If the installation is successful, it should display the version information of Anystat.

Troubleshooting
---------------

If you encounter any problems during the installation process, please check the following:

1. Ensure Python version meets requirements
2. Check if all dependencies are installed correctly
3. If there are permission issues, try using administrator privileges or sudo
4. For other issues, please refer to the error messages and search for solutions in the project's GitHub issues

Next Steps
----------

After successful installation, you can refer to the following documents to start using Anystat:

- :doc:`First Startup and API Configuration <tutorial_startup>`
- :doc:`Data Import Module <tutorial_loading>`