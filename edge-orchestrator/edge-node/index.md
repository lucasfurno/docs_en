# Edge **Node**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-orchestrator/edge-nodes/index.md)

Azion Edge Node allows the creation of its own infrastructure, enabling the installation of services and resources in real time.

It is open and can be obtained in various types of microprocessor architectures, such as x86 and ARM, and in various types of equipment sizes, including Raspberry PI, network equipment such as network switches and SD-WAN routers, but also corporate servers.

> 1. [Install](#install)
> 2. [View](#View)
> 3. [Authorize](#authorize)
> 5. [Services](#services)
> 5. [Agent commands and options](#commands)
> 6. [Support documentation](#support-documentation)

---

## 1. Install {#install}

The installation of Edge Node is divided into 3 steps: 1- Generation of a credential to perform the actions; 2- Installation of the Edge Orchestrator agent on devices and; 3- device authentication (post installation).

### 1.1 Credential generation {#credential-generation}

To generate the necessary credential for authenticating your edge nodes, the following steps must be performed:	

1- Access the [Real-Time Manager](https://manager.azion.com/);

2- In the top right menu, access the page *Credentials*;

3- Click on the "Add Credential" button;

4- Fill in the required fields and click the "Save" button:

​	**Description:** Describe, for example, how or by whom the credential will be used;

​	**Teams:** Link the permissions of actions that the credential can exercise;

**Note:** The Token will be generated after the credential is saved.

### 1.2 Installation {#installation}

To begin the Edge Node installation process, you must download the Edge Orchestrator installation binary.

Check the list of platforms compatible with Azion Edge Node and download:

| Operational System | Architecture | File                                                         |
| :----------------- | :----------: | ------------------------------------------------------------ |
| Linux              |    x86_64    | [edge-orchestrator](http://downloads.azion.com/linux/x86-64/edge-orchestrator) |
| Linux              |     ARM      | [edge-orchestrator](http://downloads.azion.com/linux/arm/edge-orchestrator) |

Alternative to download via command line. In the example, the download link refers to the Linux/x86_64 agent, if you want to download another version, just change the url for the desired operating system or architecture:

` curl -O http://downloads.azion.com/linux/x86_64/edge-orchestrator`

After downloading, you must follow the steps below, for your device to install the Edge Orchestrator agent:

1- Install the Edge Orchestrator agent:
`chmod +x edge-orchestrator
./edge-orchestrator install`

2- Inform the token to the Edge Orchestrator agent;

3- Confirm the following steps and;

4- After completing the installation, you must start the Edge Orchestrator agent:
`edge-orchestrator start`
**Note:** If your operating system does not have a service manager (systemd, for example), you must run as foreground.
`edge-orchestrator start --foreground`

---

## 2. View {#view}

Whenever the installation code is executed on any device, followed by authentication via Token, the edge nodes will be listed in [Real-Time Manager](https://manager.azion.com/).

To view the list of edge nodes created for your account, the following steps must be performed:

1- Access the [Real-Time Manager](https://manager.azion.com/);

2- In the top left menu, access the *Edge Orchestration* item and select the *Edge Node* page;

**Note:** The listed items can have their veracity confirmed by validating the HashId column, as it contains the hash used for the creation and authentication of the edge node. 

---

## 3. Authorize {#authorize}

For your edge nodes to start the orchestration, they must be authorized. To authorize an edge node, the following steps must be performed:

1- Access the Edge Nodes listing on the [Real-Time Manager](https://manager.azion.com/);

2- Click on the (key) icon and accept the confirmation window.

After authorization, Edge Node can take up to 10 seconds for the orchestration of services to start.

---

## 4. Services {#services}

To provision the services registered in your library, the following steps must be performed:

1- Access the Edge Nodes listing on the [Real-Time Manager](https://manager.azion.com/);

2- Select the Edge Node you want to configure;

3- Access the "Services" tab and click the "Add Service" button;

4- Link the desired service and, if necessary, configure the variables required for execution.

The available orchestration services

The services available for orchestration via Edge Node, must be registered in *Edge Libraries> Edge Services* and marked as active.

After providing the service, Edge Node starts the orchestration following the priority of the resources. You can follow the service installation process via logs on the Edge Orchestrator agent.

---

## 5. Agent commands and options {#commands}

The Edge Orchestrator agent has some commands and options to make it easier to use.

|                      | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| --debug ou -d        | Sets the agent logs to debug mode.                           |
| --help ou -h         | Help on commands that can be run on the agent.               |
| install              | Installs the agent on the customer's device. Copies the binary to the installation location; adds the Edge Orchestrator agent to the device's service manager (if any) and; sets up credentials for Edge Node authentication. |
| start [--foreground] | Initializes the Edge Orchestrator agent through the device's service manager.<br /> **Note:** This option is used for foreground execution. |
| status               | Gets the execution status of the Edge Orchestrator agent.    |

---

## 6. Support documentation {#support-documentation}

- [Edge Orchestrator](https://www.azion.com/en/documentation/products/edge-orchestrator)
- [Edge Services](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-services)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)