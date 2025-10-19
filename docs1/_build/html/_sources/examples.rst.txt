使用示例
========

本章节提供了不同规模数据量的使用示例，帮助您了解 Anystat 在处理不同大小数据集时的性能表现。 **注意，所有耗时测试均在自动模式下进行。**

.. note::
   我们对每个实验进行了 5 次独立重复测试，并以 “均值 ± 标准差” 的形式报告耗时结果。测试结果不包括数据上传与解析为 DataFrame 的时间。需要注意，由于大模型生成内容存在一定的不确定性，且不同模型间性能差异较大，实际运行中的耗时可能会出现一定波动。

小规模数据量示例（<1000 条）
-----------------------------

我们使用 UC Irvine 中的数据集 “ `Wine <https://archive.ics.uci.edu/dataset/109/wine>`_ ”（包含 178 条数据，去除 Index 文件）作为测试数据集。  
各部分耗时情况如下（单位：秒）：

.. list-table::
   :header-rows: 1
   :widths: 18 20 20
   :align: center

   * - 环节
     - ChatGPT-4o 耗时
     - Deepseek 耗时
   * - 数据导入
     - 6.33±0.63
     - 16.06±0.36
   * - 数据预处理
     - 23.86±11.77
     - 171.19±34.30
   * - 数据可视化
     - 25.55±10.81
     - 135.00±34.32
   * - 建模分析
     - 25.38±12.35
     - 105.24±53.80
   * - 报告生成
     - 123.48±19.30
     - 391.11±40.41

生成报告示例：

ChatGPT-4o： :download:`点击以下载doc文档 </reports/report-wine-4o.docx>`

Deepseek： :download:`点击以下载doc文档 </reports/report-wine-ds.docx>`


中等规模数据量示例（1000 条–10000 条）
---------------------------------------

我们使用 UC Irvine 中的数据集 “ `Seoul Bike Sharing Demand <https://archive.ics.uci.edu/dataset/560/seoul+bike+sharing+demand>`_ ”（包含 8760 条数据）作为测试数据集。  
各部分耗时情况如下（单位：秒）：

.. list-table::
   :header-rows: 1
   :widths: 18 20 20
   :align: center

   * - 环节
     - ChatGPT-4o 耗时
     - Deepseek 耗时
   * - 数据导入
     - 6.79±0.79
     - 16.93±0.46
   * - 数据预处理
     - 27.99±5.52
     - 144.17±41.80
   * - 数据可视化
     - 34.43±16.81
     - 194.93±87.03
   * - 建模分析
     - 83.91±67.99
     - 93.05±3.47
   * - 报告生成
     - 125.02±18.91
     - 364.67±42.61

生成报告示例：

ChatGPT-4o： :download:`点击以下载doc文档 </reports/report-bike-4o.docx>`

Deepseek： :download:`点击以下载doc文档 </reports/report-bike-ds.docx>`


大规模数据量示例（>10000 条）
-----------------------------

我们使用 UC Irvine 中的数据集 “ `Steel Industry Energy Consumption <https://archive.ics.uci.edu/dataset/851/steel+industry+energy+consumption>`_ ”（包含 35040 条数据）作为测试数据集。  
各部分耗时情况如下（单位：秒）：

.. list-table::
   :header-rows: 1
   :widths: 18 20 20
   :align: center

   * - 环节
     - ChatGPT-4o 耗时
     - Deepseek 耗时
   * - 数据导入
     - 6.33±0.63
     - 18.03±0.48
   * - 数据预处理
     - 40.99±32.55
     - 197.18±62.19
   * - 数据可视化
     - 26.52±5.82
     - 136.03±11.65
   * - 建模分析
     - 65.94±50.33
     - 180.77±61.61
   * - 报告生成
     - 142.34±18.76
     - 375.53±57.79

生成报告示例：

ChatGPT-4o： :download:`点击以下载doc文档 </reports/report-steel-4o.docx>`

Deepseek： :download:`点击以下载doc文档 </reports/report-steel-ds.docx>`

.. note::
   实际耗时可能因硬件配置、网络状况和具体操作而有所不同。由于大模型返回结果不稳定，如果在自动模式下出现预处理、可视化及建模环节 debug 次数过多的情况，请清空数据并重新开始流程；如为手动操作，请切换至其他环节并再切回对应出错环节重试。
