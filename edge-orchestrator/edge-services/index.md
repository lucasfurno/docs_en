# Edge **Services**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-orchestrator/edge-services/index.md)

Azion Edge Services is an Edge Orchestrator product module that allows the management of orchestrated services in its own edge infrastructure, enabling the registration of resources and other configurations via Real-Time Manager and the creation and customization of services so that they can be orchestrated on the defined Edge Nodes.

Configure the triggers for installation, uninstallation, reload and define the dependencies between the resources needed to run your service on your edge network.

> 1. [How it works](#how-it-works)
> 2. [Hands-on](#hands-on)
> 5. [Support documentation](#support-documentation)

---

## 1. How it works {#how-it-works}

By using Azion as your Edge platform, you can create and customize services to run on your private and hybrid edge network. Azion Edge Services works through triggers for installation, uninstallation and reloading, with definition of dependencies between resources and natively implements a set of Azion features, such as Edge Applications, Edge Firewalls and Edge Functions, using as a base Azion Cells technology from Azion. And in this way, build Edge Applications for a wide range of use cases, ranging from a high-quality, high-scale CDN, to hosting web applications, AI, VR applications and many others. To do this, activate Azion Cells and define the Edge Nodes that should receive certain applications, all controlled by the control panel or APIs, in a centralized interface and with different access controls.

### Resources

For the orchestration of services on your device, you must configure the Resources necessary for installation, uninstallation and reloading.

A resource of the type "Shell Script" indicates that the resource will be installed and executed according to the selected trigger. The Edge Orchestrator agent uses the *sh-bang* informed in the content header to execute the script and, in the absence of one, the POSIX-compatible shell on the device (*/bin/sh*) is used.

A resource of type "Text" indicates that the content will be copied as plain/text to the device. Resources of type "Text" are usually used for configuration files.

All resources are executed from the path informed in the registration. The "Path" field refers to the file's absolute path. Therefore, only directories starting and ending with "/" are accepted. Paths beginning with ".", ".." or "~" will not be accepted and are not supported.

When informing the content of your resource, it can contain a script, when executed as "Shell Script" or content of configuration files for the resource, when of type "Text". Both are compatible with the use of variables, if the tag "{{VARNAME}}" is added.

It is possible to use variables in the content of resources using the tag "{{VARNAME}}", such as:
`port = {{PORT_HTTP}}`

### Triggers

When configuring "Shell Script" resources, it is necessary to define which triggers will cause the resource to be executed.

There are triggers "Install", "Reload" and "Uninstall", each having a function and order of execution:
1) Install: it is the first to be executed and must have in its content, the script necessary for the installation of the service.

2) Reload: when configured, it will be executed at the end of the installation of all resources and also whenever there is a change in the links between Edge Service and Edge Node, such as, for example, a change in the values of the variables.

3) Uninstall: it is executed whenever the link between Edge Services and Edge Node is broken, that is, whenever the service is deleted from the Edge Nodes for which it is provisioned.

### Variables

Variables are dynamic values that affect Edge Services that will be orchestrated and executed on Edge Nodes. That is, it is possible to orchestrate and run the same service, on different devices, with different values for the settings, such as configuring a service on port 3306 on one device and on port 3307 on another device.

### Vínculo ao Edge Node

All registered services can be orchestrated and run on one or more Edge Nodes on your private network.

Only active services will be available for orchestration in Edge Node and, after linking, you can change the value of existing variables, delete or add new services to the device.

---

## 2. Hands-on. Step by Step to create an Edge Service {#hands-on}

### Creating a Service

1- Access the [Real-Time Manager](https://manager.azion.com/);

2- In the upper left menu, access the item *Edge Libraries*, and select the page *Edge Services*;

3- Click on the "Add Service" button;
Note: Your service will be created automatically. You can change the name of the service by clicking on "My New Service" in the identification bar.

4- In the Resources list, click on "Add Resource";

5- Configure the necessary resources for your service, using the triggers "*Install*", "*Reload*", and "*Uninstall*";

6- Optional: If you have used variables in the content of one or more resources, set the default values for the variables in the "*Environment*" tab.
Note: The variables must follow the pattern "Variable = Value", where "Variable" has been used in content of resources already registered.

7- Activate the service. There, now your service can be used on one or more edge nodes.

---

## 3. Support documentation {#support-documentation}

- [Edge Node](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-node)
- [Edge Orchestrator](https://www.azion.com/en/documentation/products/edge-orchestrator)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
