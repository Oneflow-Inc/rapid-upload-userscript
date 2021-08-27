/*
 * @Author: mengzonefire
 * @Date: 2021-08-25 08:34:46
 * @LastEditTime: 2021-08-27 12:34:43
 * @LastEditors: mengzonefire
 * @Description: 定义全套的前台弹窗逻辑, 在Swal的回调函数内调用***Task类内定义的任务代码
 */
import { Swal } from "./const";
import IGeneratebdlinkTask from "./IGeneratebdlinkTask";
import IRapiduploadTask from "./IRapiduploadTask";
import { swalConfig } from "./swalConfig";

export default class Swalbase {
  swalArgs: any;
  rapiduploadTask: IRapiduploadTask;
  generatebdlinkTask: IGeneratebdlinkTask;
  constructor(
    myrapiduploadTask: IRapiduploadTask,
    mygeneratebdlinkTask: IGeneratebdlinkTask
  ) {
    this.rapiduploadTask = myrapiduploadTask;
    this.generatebdlinkTask = mygeneratebdlinkTask;
  }

  mergeArg(...inputArgs: any) {
    let output = {};
    $.extend(output, this.swalArgs, ...inputArgs);
    return output;
  }
  // 点击 "秒传链接" 后显示的弹窗
  inputView(swalArgs?: any) {
    Swal.fire(this.mergeArg(swalConfig.inputView, swalArgs)).then(
      (result: any) => {
        if (result.isConfirmed) {
          this.inputPathView();
        }
      }
    );
  }
  // 输入转存路径的弹窗
  inputPathView(swalArg?: any) {
    Swal.fire(this.mergeArg(swalConfig.inputPathView, swalArg)).then(
      // 转存文件代码入口 异步调用
    );
  }
  // 转存/生成过程中的弹窗
  // processView(swalArg?: any) {}
  // // 转存秒传完成的弹窗
  // saveFinishView(swalArg?: any) {}
  // // 生成秒传完成的弹窗
  // genFinishiView(swalArg?: any) {}
  // // 生成文件夹秒传, 是否递归生成提示
  // checkRecursive(swalArg?: any) {}
  // // 设置页
  // settingView(swalArg?: any) {}
  // // 生成页 (输入路径列表进行秒传生成)
  // genView(swalArg?: any) {}
  // // 跨域提示
  // csdWarning(swalArg?: any) {}
  // // 生成秒传未完成任务提示
  // genUnfinishi(swalArg?: any) {}
  // // 测试秒传覆盖文件提示
  // checkMd5Warning(swalArg?: any) {}
  // // 更新信息页
  // updateInfo(swalArg?: any) {}
}
