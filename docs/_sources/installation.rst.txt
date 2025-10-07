通过源码安装
========

环境准备
--------

- **操作系统**：Windows/Linux/MacOS  
- **Python版本**：Python 3.9+（*必须安装，推荐安装 Python 3.11+*）  
- **Anaconda** （*必须安装*）  
- **Git** （推荐安装）

安装步骤
--------


1. 克隆项目到本地
   在终端中执行以下命令，将仓库克隆到当前目录：

   .. code-block:: bash
   
      git clone https://github.com/ElvisWang1111/AAAAAnystat.git

   克隆完成后，会在当前目录下生成一个 AAAAAnystat 文件夹，包含项目所有源代码。
   若未下载 Git，则不使用第一步，直接从 GitHub 下载 ZIP 文件并解压。


2. 将工作目录转到 Anystat 本体文件所在文件夹

   .. code-block:: bash
   
      cd AAAAAnystat

   其中将括号内的内容替换为 Anystat 的文件夹地址即可。

3. 创建虚拟环境

   .. code-block:: bash
   
      conda create -n anystat python=3.11
      conda activate anystat

4. 安装依赖项

   .. code-block:: bash

      pip install -r requirements.txt
      pip install playwright
      playwright install

安装常见问题及解决方案
--------------------

**Q**: 如何准备 Python 环境？

**A**: 请参考 `Python安装教程（全平台保姆级教学） <https://zhuanlan.zhihu.com/p/1941167588743811204>`_


**Q**: 必须配置环境吗？

**A**: 我们在下一章提供打包好的 app 下载链接，提供无需代码的安装实现。