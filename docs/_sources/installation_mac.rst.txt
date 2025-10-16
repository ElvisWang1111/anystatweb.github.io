通过脚本安装（Mac）
========

由于 macOS 平台的安全认证流程较为复杂，**Anystat 推荐使用一键脚本的方式完成环境配置与启动**，无需手动安装依赖或配置浏览器驱动。


预先准备
--------

请先安装 `Anaconda` 或 `Miniconda`，用于创建独立的 Python 环境。

安装地址： `https://www.anaconda.com/download <https://www.anaconda.com/download>`_


一键配置
--------


打开 Anystat 程序所在目录，在该目录下打开终端（命令行），执行以下命令：

.. code-block:: bash

   bash setup.sh

该脚本将自动完成以下步骤：

1. 创建或激活名为 ``anystat_env`` 的 Conda 环境（Python 3.12）；
2. 使用 ``pip install -r requirements.txt`` 安装项目依赖；
3. 安装 Playwright 及其浏览器驱动（``pip install playwright && playwright install``）；
4. 完成后输出启动命令提示。

安装完成后，在终端中执行以下命令即可启动 Anystat Agent：

.. code-block:: bash

   conda activate anystat_env
   streamlit run app.py

