JSLinux
=======

  Source code: https://bellard.org/tinyemu/jslinux-2019-12-21.tar.gz

  You must copy all the files to a directory on a web server in order to
  run the demo (it is needed so that the XML HTTP Requests work
  correctly). Assuming it is installed in http://localhost/jslinux,
  explore in a browser:

  http://localhost/jslinux

  External link: https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192

  A minimal busybox distribution for RISCV-64 and x86 is provided. The
  RISCV-64 version is executed by default. To run the x86 version,
  explore:

  http://localhost/jslinux?cpu=x86

  The source jslinux.js can be modified to change the default
  configuration.

  More complete Linux distributions (such as buildroot) can be used
  provided you keep using the same precompiled Linux kernels. The
  TinyEMU 'splitimg' tool must be used to convert a diskimage to a list
  of files. For example:

  splitimg root-riscv64.bin root-riscv64 256

  The demo VM configurations are in root-riscv64.cfg and root-x86.cfg.

NOTES
=====

  Testing the following configuration: http://localhost:3000/?cpu=x86&url=root-x86.cfg&mem=192

  What worked:

  - alias
  - cat
  - cd
  - clear
  - echo
  - ls
  - ping 127.0.0.1
  - pwd
  - rm
  - rmdir
  - touch
  - vi

  What didn't:

  - man ls
  - ping google.com
  - ping localhost
  - vim



