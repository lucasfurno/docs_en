# Edge **Node**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-orchestrator/edge-nodes/index.md)

Azion Edge Node enables you to create your own edge infrastructure, allowing you to install services and resources in real time.

It is open software and can be run on different types of microprocessor architecture such as x86 and ARM, and different sizes of equipment, including Raspberry PI, network equipment such as network switches and SD-WAN routers, as well as corporate servers.

> 1. [To install](#install)
> 2. [To view](#View)
> 3. [To authorize](#authorize)
> 5. [Services](#services)
> 5. [Agent commands and options](#commands)
> 6. [Supporting documentation](#support-documentation)

---

## 1. To install {#install}

Edge Node is installed in 3 stages: 1- Generate a credential to carry out the actions; 2- Install the Edge Orchestrator agent on the devices and; 3- Authenticate the device (after installation).

### 1.1 Generating a credential {#credential-generation}

To generate the credential needed to authenticate your edge nodes, you need to carry out the following steps:	

1- Go to [Real-Time Manager](https://manager.azion.com/);

2- From the top right menu, open the *Credentials* page;

3- Click on the "Add Credential" button;

4- Fill in the required fields and click the "Save” button:

​	**Description:** describe, for example, how or by whom the credential will be used;

​	**Teams:** link actions that the credential will allow, to permissions.

**Note:** the token will be created after the credential has been saved.

### 1.2 Installation {#installation}

To begin installing Edge Node, you must download the Edge Orchestrator installation binary.

Check the list of compatible platforms for Azion Edge Node and download:

| Operational System | Architecture | File                                                         |
| :----------------- | :----------: | ------------------------------------------------------------ |
| Linux              |    x86_64    | [edge-orchestrator](http://downloads.azion.com/linux/x86-64/edge-orchestrator) |
| Linux              |     ARM      | [edge-orchestrator](http://downloads.azion.com/linux/arm/edge-orchestrator) |

Alternatively, you can download it using the Command line. In the example, the download link refers to the Linux/x86_64 agent. If you want to download another version, just change the url for the required operating system or architecture:

` curl -O http://downloads.azion.com/linux/x86_64/edge-orchestrator`

After downloading, you must follow the steps below, in order to install the Edge Orchestrator agent to your device:

1- Install the Edge Orchestrator agent:
`chmod +x edge-orchestrator
./edge-orchestrator install`

2- Enter the token for the Edge Orchestrator agent;

3- Confirm the next steps and;

4- When you have finished installing it, you will need to start the Edge Orchestrator agent:
`edge-orchestrator start`
**Note:** If your operating system does not have a service manager (systemd, for example), you must run it in the foreground.
`edge-orchestrator start --foreground`

---

## 2. To view {#view}

Whenever the installation code is run for any device and it has been authenticated by the Token, the edge nodes will be listed in [Real-Time Manager](https://manager.azion.com/).

To view the list of edge nodes created for your account, carry out the following steps:

1- Go to [Real-Time Manager](https://manager.azion.com/);

2- In the upper left menu, open the *Edge Orchestration* item and select the *Edge Node* page;

**Note:** The listed items can be verified by checking the HashId column, as it contains the hash used to create and authenticate the edge node.

---

## 3. To authorize {#authorize}

To begin orchestrating your edge nodes, they will need to have been authorized. To authorize an edge node, the following steps must be carried out:

1- Open the list of Edge Nodes in [Real-Time Manager](https://manager.azion.com/);

2- Click on the icon (key) and accept the confirmation window.

After authorization, the Edge Node can take up to 10 seconds before services can be orchestrated.

---

## 4. Services {#services}

To provision the services registered in your library, carry out the following steps:

1- Open the list of Edge Nodes in [Real-Time Manager](https://manager.azion.com/);

2- Select the Edge Node that you want to configure;

3- Open the "Services" tab and click on the "Add Service” button;

4- Link it to the service you want and, if necessary, configure the variables it will be executed under.

Services that are due to be orchestrated via Edge Node, must be registered in *Edge Libraries> Edge Services* and marked as active.

Once it has provided the service, Edge Node can begin orchestrating it based on resource priorities. You can monitor the service installation process via logs in the Edge Orchestrator agent.

---

## 5. Agent commands and options {#commands}

The Edge Orchestrator agent has additional commands and options to make it easier to use.

|                      | Description                                                  |
| :------------------- | :----------------------------------------------------------- |
| --debug ou -d        | Sets the agent logs to debug mode.                           |
| --help ou -h         | Help on the commands that the agent can execute.             |
| install              | Install the agent to the client’s device. Copies the binary to the installation location; adds the Edge Orchestrator agent to the device's service manager (if any) and; sets up credentials to authenticate the Edge Node. |
| start [--foreground] | Initializes the Edge Orchestrator agent through the device's service manager.<br /> **Note:** The foreground option is used to run it in the foreground. |
| status               | Reports on the status of the execution of the Edge Orchestrator agent. |
| stop                 | This is to run the Edge Orchestrator agent through the device's service manager. |
| uninstall            | Uninstall the agent from the client’s device. Removes the binary from the installation location; removes the Edge Orchestrator agent from the device's service manager (if any).<br />**Note:** authentication credentials remain on the device and can be removed using the Azion control panel. |
| --version or -v      | Display the installed version of the agent.                  |

---

## 6. Supporting documentation {#support-documentation}

- [Edge Orchestrator](https://www.azion.com/en/documentation/products/edge-orchestrator)
- [Edge Services](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-services)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)