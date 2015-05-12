#!/bin/awk
ifconfig eth0 |grep Bcast |awk -F: '{print $2}'|awk 'BEGIN{print "Your IP is :\t"} {print $1}'
ifconfig eth0 |grep Bcast | awk -F" " '{print $2}'|awk -F":" '{print $2}'
ifconfig eth0 |grep Bcast |cut -d ":" -f2|cut -d" " -f1
aWk(){
sudo gedit /sys/class/backlight/intel_backlight/brightness
sudo gedit /sys/class/backlight/eeepc-wmi/brightness
}
