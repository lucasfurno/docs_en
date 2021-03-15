---
layout: page-documentation-md
title:   pages.troubleshoot_traceroute.title 
description:  pages.troubleshoot_traceroute.description 
meta_tags:  pages.troubleshoot_traceroute.meta_tags 

namespace:     documentation_how_to_troubleshoot_traceroute

permalink:      /documentation/products/how-to/troubleshooting/run-the-traceroute-command/
permalink_en:   /documentation/products/how-to/troubleshooting/run-the-traceroute-command/
permalink_pt-br:   /documentacao/produtos/how-to/troubleshooting/executar-o-comando-traceroute/
---
# Run the Traceroute command       

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/troubleshooting/run-the-traceroute-command/index.md)

Traceroute is a network diagnostic tool, that our technical support use to diagnose performance and delivery issues.

Using this tool, it is possible to monitor and get information on the way that the packets travel from the computer to a specific web server.

Here are the step by step guides to using it, depending on the platform:

> 1. [Windows](#Windowss)
> 2. [Mac OS X](#MacOSX)
> 3. [Linux](#Linuxx)

---

## Windows {#Windowss}

1. Open the command window in Windows (+ R).
2. Type the command cmd.
3. Click on the OK button to see the DOS emulator window.
4. At the command prompt, type tracert &lt;hostname&gt;.
5. Press Enter to see the result of the traceroute.

---

## Mac OS X {#MacOSX}

1. Open the Utilities folder.
2. Open the Network Utility application.
3. Click on Traceroute.
4. Type the hostname, that you want to run the traceroute on.
5. Click on the Trace button.

---

## Linux {#Linuxx}

**Install Traceroute**

The command to install the Traceroute tool in Linux depends on the version that you are using. These are the installation commands for the main versions of Linux:

* Red Hat/CentOS: sudo yum install traceroute -y
* Ubuntu/Debian: sudo apt-get update -y

~~~
#sudo apt-get install traceroute
~~~

**Perform a Traceroute**

1. Open the Linux terminal.
2. At the command prompt, type traceroute &lt;hostname&gt;.
3. Press Enter to see the result of the traceroute.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)     
