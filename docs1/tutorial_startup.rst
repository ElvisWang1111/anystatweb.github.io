首次启动与 API 配置
==================

启动应用
--------

1. 若虚拟环境没有启用（可通过终端左侧是否有圆括号包围的环境名称判断），则使用以下命令启用：

   .. code-block:: bash

      conda activate Anystat

   其中 ``Anystat`` 为在 `安装部署 </anystat.github.io/installation.html>`_ 章节创建的虚拟环境名称。

2. 启动应用：

   .. code-block:: bash

      streamlit run app.py

3. 在浏览器中打开显示的地址（通常为 ``http://localhost:8501``）。  
   若浏览器未自动跳转，可将终端中显示的地址复制并粘贴至浏览器地址栏后回车。

API 配置
--------

**本程序运行需要提供 API key 来请求大模型调用，费用由用户承担。**  
目前支持的平台：ChatGPT、Deepseek、通义千问和智谱AI。  
在使用前，请在左侧边栏选择相应的大模型，填入 API key 并保存。

API 获取方法详见 `API key 获取途径 </anystat.github.io/resources.md#api-key>`。

结束运行
--------

- 直接关闭浏览器 **不会** 释放占用的端口。  
  请在运行该应用的终端中按 ``Ctrl+C`` 来停止进程并关闭端口。  
- 若需退出虚拟环境，请执行：

  .. code-block:: bash

     conda deactivate
