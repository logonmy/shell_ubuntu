#!/bin/bash
ip=`ifconfig eth0 |grep Bcast |cut -d ":" -f2|cut -d" " -f1`
sed -ri "/IP=/s/^(IP=)[^ ]+/\1${ip}/" ~/desktop/mentohust.conf
