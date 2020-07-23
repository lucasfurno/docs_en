# Run the Dig command         

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/how-to/troubleshooting/run-the-dig-command/index.md)

Dig is a network tool used to look up DNS servers. Below is a step by step guide, depending on the platform you are using:

> 1. [Windows](#Windowss)
> 2. [Mac OS X](#MacOSX)
> 3. [Linux](#Linuxx)

---

## Windows {#Windowss}

**Install the Dig tool**

1. Download the stable version of BIND from  [http://www.isc.org/downloads/](http://www.isc.org/downloads/).
2. Extract all the content from the Zip into a separate folder.
3. Run BINDInstall.exe.
4. The installer for BIND will ask for a user account. Enter the account with restricted privileges.
5. Use the Tools Only option to install only the Dig, host, nslookup and nsupdate tools.


**Perform a Dig**

1. Open the command window in Windows (+ R).
2. Type the command cmd.
3. Click on the OK button to see the DOS emulator window.
4. At the command prompt, type dig  &lt;hostname&gt; +trace.
5. Press Enter to see the result of the dig.

---

## Mac OS X {#MacOSX}

1. Open the command box on Mac OS X (command + space).
2. Type terminal.
3. Press Enter to see the Mac OS X terminal.
4. At the command prompt, type dig &lt;hostname&gt; +trace.
5. Press Enter to see the result of the dig.

---

## Linux {#Linuxx}

**Install the Dig tool**

The command to install the Dig tool in Linux depends on the version that you are using. These are the installation commands for the main versions of Linux:

* Red Hat/CentOS: sudo yum install bind-utils
* Ubuntu/Debian: sudo apt-get update -y

~~~
#sudo apt-get install dnsutils -y
~~~

**Perform a Dig**

1. Open the Linux terminal.
2. At the command prompt, type dig &lt;hostname&gt; +trace.
3. Press Enter to see the result of the dig.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)               