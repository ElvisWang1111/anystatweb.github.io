Data Import Module
================

The Data Import Module in Anystat allows you to easily upload and manage your data files. This document covers the various data import methods and features available.

Accessing the Data Import Module
-------------------------------

To access the Data Import Module:

1. Launch Anystat
2. From the main dashboard, click on "Data Import" in the left navigation menu

Supported Data Formats
----------------------

Anystat supports importing data from the following formats:

- CSV (Comma-Separated Values)
- Excel (XLSX, XLS)
- JSON (JavaScript Object Notation)
- Parquet
- SQL databases (via connection)
- Plain text files

Importing Data
--------------

Method 1: Upload File
--------------------

.. image:: ../images/数据导入-数据上传.png
   :alt: Data Upload Interface

1. Click the "Upload File" button
2. Select one or more files from your computer
3. Click "Open" to start the upload process
4. Wait for the file to be processed

Method 2: Drag and Drop
-----------------------

1. Simply drag your data files from your file explorer
2. Drop them into the designated area in Anystat
3. The files will be automatically uploaded and processed

Method 3: Database Connection
-----------------------------

1. Click the "Connect Database" button
2. Select the database type (MySQL, PostgreSQL, SQLite, etc.)
3. Enter the connection details:
   - Host address
   - Port number
   - Username and password
   - Database name
4. Click "Test Connection" to verify
5. Once connected, select the tables you want to import

Data Preview
------------

After importing, you can preview your data:

.. image:: ../images/数据导入-数据展示-数据预览.png
   :alt: Data Preview Interface

- **View Data**: See the first few rows of your dataset
- **Adjust Column Width**: Resize columns as needed
- **Sort Data**: Click on column headers to sort

Data Type Overview
------------------

Anystat automatically detects and categorizes data types:

.. image:: ../images/数据导入-数据展示-数据类型概览.png
   :alt: Data Type Overview

- **Numerical**: Integers, floats, etc.
- **Categorical**: Text categories, enums
- **Date/Time**: Timestamps, dates
- **Text**: Long text fields
- **Boolean**: True/false values

You can manually adjust these types if needed.

Data Import Recommendations
---------------------------

Anystat provides intelligent recommendations based on your dataset:

.. image:: ../images/数据导入-数据建议.png
   :alt: Data Import Recommendations

- Potential data quality issues
- Suggested preprocessing steps
- Analysis possibilities
- Recommended visualization types

Managing Imported Data
----------------------

After importing, you can:

- **Rename Dataset**: Give your dataset a meaningful name
- **Save Dataset**: Save for future sessions
- **Export Dataset**: Export to various formats
- **Delete Dataset**: Remove unwanted datasets

Batch Processing
---------------

For multiple files, you can use batch processing:

1. Select multiple files during upload
2. Apply consistent settings across all files
3. Process them simultaneously

Troubleshooting Import Issues
----------------------------

Common issues and solutions:

1. **File Size Limitations**: If your file is too large, consider splitting it
2. **Encoding Problems**: Ensure your file uses UTF-8 encoding
3. **Format Errors**: Verify your file follows the correct format specifications
4. **Memory Issues**: For very large datasets, consider increasing system memory or using database connections

Next Steps
----------

After importing your data, you can proceed with preprocessing:

- :doc:`Data Preprocessing Module <tutorial_preprocessing>`
- :doc:`Data Visualization Module <tutorial_visualization>`