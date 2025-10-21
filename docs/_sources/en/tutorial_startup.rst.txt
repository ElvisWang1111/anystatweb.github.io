First Startup and API Configuration
=================================

This document guides you through the initial setup process for Anystat, including API configuration and basic settings to ensure the software runs properly.

Starting Anystat for the First Time
----------------------------------

After installing Anystat, you can launch the software by:

- Double-clicking the Anystat desktop shortcut (Windows/Mac)
- Running `anystat` in Terminal or Command Prompt
- Launching from the Start menu (Windows) or Launchpad (Mac)

Initial Configuration Wizard
----------------------------

When you launch Anystat for the first time, you will be guided through an initial configuration wizard:

1. **Welcome Screen**: Click "Next" to begin configuration

2. **Language Selection**: Choose your preferred interface language

3. **API Configuration**: This is a crucial step that enables Anystat's AI capabilities

API Configuration
----------------

Anystat requires API access to function properly. Here's how to configure it:

.. image:: ../images/API_Configuration.png
   :alt: API Configuration Interface

Step 1: Select API Provider
---------------------------

Choose from the available API providers:

- OpenAI API
- Anthropic API
- Other compatible APIs

Step 2: Enter API Key
----------------------

1. Obtain your API key from the selected provider:
   - For OpenAI: Visit `OpenAI API Keys <https://platform.openai.com/api-keys>`_
   - For Anthropic: Visit `Anthropic Console <https://console.anthropic.com/>`_

2. Copy the API key to your clipboard

3. Paste the API key into the designated field in Anystat

Step 3: Configure Model Settings
-------------------------------

- **Model Selection**: Choose the AI model you want to use (e.g., gpt-4, claude-3)
- **Temperature**: Adjust the creativity level of AI responses (lower = more deterministic, higher = more creative)
- **Max Tokens**: Set the maximum token limit for API responses

Step 4: Test API Connection
---------------------------

Click the "Test Connection" button to verify that your API configuration is working correctly. If the test is successful, you'll see a confirmation message.

Advanced Settings
----------------

Additional settings you can configure:

- **Proxy Settings**: If you need to use a proxy server to access the API
- **Cache Settings**: Configure how responses are cached
- **Logging Level**: Set the level of detail for logs

Saving Configuration
-------------------

After completing all settings, click "Save" to apply the configuration. Your API settings will be securely stored and used for all subsequent sessions.

Troubleshooting API Issues
------------------------

If you encounter API connection problems:

1. Verify that your API key is entered correctly
2. Ensure you have sufficient API credits/quota with your provider
3. Check your internet connection and firewall settings
4. If using a proxy, verify proxy settings are correct
5. Refer to the error message for specific guidance

Next Steps
----------

After successful configuration, you can start using Anystat by importing your data:

- :doc:`Data Import Module <tutorial_loading>`
- :doc:`Data Preprocessing Module <tutorial_preprocessing>`