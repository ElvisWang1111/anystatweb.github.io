Data Modeling Module
==================

The Data Modeling Module in Anystat provides powerful tools to build, train, and evaluate machine learning models. This document covers the various modeling features available.

Accessing the Data Modeling Module
----------------------------------

To access the Data Modeling Module:

1. Launch Anystat
2. Import and preprocess your data
3. From the main dashboard, click on "Data Modeling" in the left navigation menu

Modeling Recommendations
-----------------------

Anystat provides intelligent modeling recommendations based on your dataset and analysis goals:

.. image:: ../images/建模分析-建模建议.png
   :alt: Modeling Recommendations

- Recommended model types based on data characteristics
- Feature selection suggestions
- Evaluation metric recommendations
- Hyperparameter optimization suggestions

Quick Modeling
-------------~

For users who want to get started quickly:

.. image:: ../images/建模分析-快速建模.png
   :alt: Quick Modeling

1. Select your target variable
2. Let Anystat automatically:
   - Split your data
   - Preprocess features
   - Train multiple model types
   - Compare performance
3. Get recommendations for the best model

Model Training Execution
------------------------

For more control over the modeling process:

.. image:: ../images/建模分析-建模执行.png
   :alt: Model Training Execution

1. **Select Model Type**:
   - Regression models (Linear, Random Forest, XGBoost, etc.)
   - Classification models (Logistic, Decision Tree, SVM, etc.)
   - Time series models
   - Clustering models
   - And more...

2. **Configure Model Parameters**:
   - Set hyperparameters
   - Configure training options
   - Set validation strategy

3. **Train the Model**:
   - Click the "Train" button
   - Monitor training progress
   - View real-time metrics

Training Results
---------------

View detailed model training results:

.. image:: ../images/建模分析-训练结果.png
   :alt: Training Results

- Performance metrics (accuracy, precision, recall, F1, etc.)
- Confusion matrix
- Feature importance
- Learning curves
- Residual plots

Inference Analysis
------------------

Apply your trained model to new data:

.. image:: ../images/建模分析-推断分析.png
   :alt: Inference Analysis

1. Load new data for prediction
2. Make predictions using your trained model
3. Analyze prediction results
4. Export predictions

Code Generation
---------------

Anystat automatically generates Python code for the models you build:

.. image:: ../images/建模分析-代码生成.png
   :alt: Code Generation

- View the generated code
- Copy the code for your own use
- Modify the code directly if needed
- Save the code for future reference

Model Management
---------------

Manage your trained models:

- Save models to disk
- Load previously trained models
- Compare multiple models
- Version control for models

Hyperparameter Optimization
---------------------------

Automatically find the best hyperparameters:

- Grid search
- Random search
- Bayesian optimization
- Custom search strategies

Troubleshooting
--------------

Common modeling issues and solutions:

1. **Overfitting**: Use regularization, cross-validation, or more data
2. **Underfitting**: Try more complex models, feature engineering
3. **Performance Issues**: Check data quality, feature scaling
4. **Training Errors**: Review error messages, check data formats

Next Steps
----------

After building your models, you can proceed with report generation:

- :doc:`Report Generation Module <tutorial_report>`