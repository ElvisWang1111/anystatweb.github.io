安装部署
========

环境准备
--------

- **操作系统**：Windows/Linux/MacOS  
- **Python版本**：Python 3.9+（*必须安装，推荐安装 Python 3.11+*）  
- **Anaconda** （*必须安装*）  
- **Github Desktop** （*非必须，但推荐安装*）  

安装步骤
--------

以下安装步骤均在终端中进行。若未下载 Github Desktop，则不使用第一步，把从 GitHub 上下载的 ``.zip`` 文件在本地文件夹解压缩。

1. 克隆项目到本地
   .. code-block:: bash

   # 如果使用 Github Desktop，在终端中执行以下命令：
   gh repo clone ElvisWang1111/AAAAAnystat
   # 否则，直接从 GitHub 下载 ZIP 文件并解压

2. 将工作目录转到 Anystat 本体文件所在文件夹
   .. code-block:: bash

   cd (your working directory)

   其中将括号内的内容替换为 Anystat 的文件夹地址即可。

3. 创建虚拟环境
   .. code-block:: bash

   conda create --name Anystat
   conda activate Anystat

4. 安装依赖项
   .. code-block:: bash
   
      pip install -r requirements.txt
      pip install playwright
      playwright install

安装常见问题及解决方案
--------------------

**Q**: 如何准备 Python 环境？

**A**: 不同运行环境的准备方式如下：

**Windows 端** 

从 Python 的 `官方站点 <https://www.python.org/>`_ 下载 Python 3.9 及以上的安装包，安装时务必勾选 **Add Python 3.x to PATH**。安装后打开终端输入
   .. code-block:: bash

   python --version

只要输出
   .. code-block:: bash

   Python (*version*)

其中 ``(*version*)`` 是实际输出的版本，应不低于 3.9，则说明安装成功。

安装 Anaconda 请在 `官方站点 <https://www.anaconda.com/download>`_ 下载并安装。

**Mac 端**

macOS 通常预装较低版本的 Python，安装方法与 Windows 类似，详情请参见 `官方站点 <https://www.python.org/downloads/macos/>`_，下载 ``.pkg`` 文件并安装对应版本。

**Linux 端**

Linux/Ubuntu 通常已内置 Python，只需升级或检查版本即可。若要更新 Python，请在终端中输入::

   sudo apt update

如果想要安装指定版本，则输入
   .. code-block:: bash

   sudo apt install python3.x

将 ``3.x`` 替换为所需版本即可。安装后可验证版本，以 Python 3.12.7 为例，输入
   .. code-block:: bash

   python3.12 --version

即可获得版本号。
