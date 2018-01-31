var Generator = require('yeoman-generator'),
    log = console.log,
    fs = require('fs'),
    path = require('path'),
    generatorName = 'gulp';
module.exports = class extends Generator {
    constructor(args, opts) {
        super(args, opts);
    }

    prompting() {
        var questions = [
            {
                name: 'projectAssets',
                type: 'list',
                message: '请选择模板:',
                choices: [
                    {
                        name: '标准pc模板',
                        value: 'pc',
                        checked: true   // 默认选中1
                    }, {
                        name: '标准Mobile模板',
                        value: 'mobile'
                    }, {
                        name: "简单pc模板",
                        value: 'spc',
                    }, {
                        name: "简单Mobile模板",
                        value: 'smobile',
                    }, {
                        name: "workflow模板",
                        value: "workflow"
                    }
                ]
            },
            {
                type: 'input',
                name: 'projectName',
                message: '输入项目名称',
                default: this.appname
            },
        ];
        return this.prompt(questions).then(
            (answers) => {
                for (var item in answers) {
                    // 把answers里的内容绑定到外层的this，便于后面的调用
                    answers.hasOwnProperty(item) && (this[item] = answers[item]);
                }
            });
    }

    writing() {
        //复制tmtworkflow
        if (this.projectAssets === "workflow") {
            this.fs.copy(this.templatePath('tmtworkflow'), this.destinationPath(`${this.projectName}`));
            //复制workflow 文件
            this.fs.copy(this.templatePath('tmtworkflow/_.tmtworkflowrc'), this.destinationPath(`${this.projectName}/.tmtworkflowrc`));
        }
        else if (this.projectAssets === "mobile" || this.projectAssets === "pc") {
            //复制模板
            this.fs.copy(this.templatePath(`${this.projectAssets}`), this.destinationPath(`${this.projectName}`));
            // 复制js
            this.fs.copy(this.templatePath('common/js'), this.destinationPath(`${this.projectName}/src/js`));

            //复制css
            this.fs.copy(this.templatePath('common/css'), this.destinationPath(`${this.projectName}/src/css`));
            //复制babel 设置
            this.fs.copy(this.templatePath(`${this.projectAssets}/_.babelrc`), this.destinationPath(`${this.projectName}/.babelrc`));

            //复制.gitignore
            this.fs.copy(this.templatePath(`${this.projectAssets}/_.gitignore`), this.destinationPath(`${this.projectName}/.gitignore`));

        } else if (this.projectAssets === "smobile" || this.projectAssets === "spc") {
            //复制模板
            this.fs.copy(this.templatePath(`${this.projectAssets}`), this.destinationPath(`${this.projectName}`));

            // 复制js
            this.fs.copy(this.templatePath('common/js'), this.destinationPath(`${this.projectName}/js`));

            //复制css
            this.fs.copy(this.templatePath('common/css'), this.destinationPath(`${this.projectName}/css`));
        }
    }

    end() {
        console.log("运行cnpm install 安装");
    }
};
