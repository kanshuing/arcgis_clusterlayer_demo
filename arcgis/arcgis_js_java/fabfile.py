#!/usr/bin/env python
# -*- coding: utf-8 -*-

from fabric.api import env, local, task, settings, run, cd
from fabric.contrib.project import rsync_project
from fabric.colors import *

#服务器装上rsync(已安装)  : yum install rsync
# 登录用户和主机名：
env.user = 'root'
env.password = "Root@123"
env.hosts = ['121.40.212.233'] # 支持多个


#def prepare():
#    print green('提交到github.....')
#    local("git pull")
#    local("git add .")
#    local("git add -p && git commit -m 'fabric commit'")
#    local("git push")
#    local('rm -rf public')
#    local('hugo')

def rsync(name="dist"):
    print green('同步到远程服务器....')
    webapp_dir='/root/docker/nginx/webapp/'
    rsync_project(local_dir=name+"/*", remote_dir=webapp_dir+name, delete='true')
    print green('复制static文件....')
    with cd(webapp_dir):
        run("\cp -rf "+name+"/static static")

# 使用举例: python
#fab rsync
#fab rsync:name=dist2
