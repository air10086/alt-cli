#!/usr/bin/env node

const program = require('commander');


//定义当前版本
//定义使用方法
//定义四个指令
program
  .version(require('../../package.json').version)


program
  .command('init')
  .description('生成一个项目')
  .alias('i')
  .action(() => {
    require('../cmd/init')();
  });

program
  .command('add')
  .description('添加新模板')
  .alias('a')
  .action(() => {
    require('../cmd/add')();
  });

program
  .command('list') // fe list
  .description('查看模板列表')
  .alias('l') // 简写
  .action(() => {
    require('../cmd/list')();
  });

program
  .command('delete') // fe delete
  .description('查看模板列表')
  .alias('d') // 简写
  .action(() => {
    require('../cmd/delete')();
  });



// 解析命令行参数
program.parse(process.argv);

if (!program.args.length) {
  program.help()
}