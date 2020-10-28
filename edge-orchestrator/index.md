# Edge **Orchestrator**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-orchestrator/index.md)

Azion Edge Orchestrator is an end-to-end encrypted orchestration service with cloud management and zero-touch provisioning, created for large-scale Edge networks. It allows you to manage and control Edge resources in real time, which includes provisioning, updating and managing Edge Applications, Edge Firewalls, Edge Functions, Digital Certificates, Edge Nodes, Edge Services and third party services (via Marketplace).

It was designed to open and run on various types of architectures such as microprocessors, such as x86 and ARM, and on various types of equipment sizes, including Raspberry PI, network equipment such as SD-WAN switches and routers and also corporate servers .

Edge Orchestrator can be used in most network architectures, including local and public networks, and also behind NATs. It is compiled with all core and library dependencies, simplifying software installation and update.

> 1. [How it works](#how-it-works)
> 2. [Edge Orchestrator modules](#modules)
> 5. [Support documentation](#support-documentation)

---

## 1. How it works {#how-it-works}

An Azion Edge Orchestrator agent is installed on the edge nodes and provides end-to-end encrypted remote node management from the control panel ([Real-Time Manager](https://manager.azion.com/)) cloud-based and API. It can be deployed using two different strategies: 1) manual installation on each edge node; or 2) automatic installation along with operating systems (for example: a linux distro or customer's O.S image) or hardware vendor (for example: an SD-WAN router, a network switch or a linux server). Customers can use an automatic registration mode, simplifying deployment (for example, new node locations or automatic node scaling), updating and managing a large number of scaled edge nodes.

All services linked to edge nodes will be orchestrated and configured from the moment the device is authorized via the control panel. The orchestration is done sequentially and respects the dependencies between resources and triggers necessary for its configuration.

---

## 2. Edge Orchestrator modules {#modules}

Azion Edge Orchestrator has the following modules so that you can build your Edge network for high performance, scalability and security, with much more simplicity and free of operational tasks.

### Edge Node

The Edge Node module enables the creation and management of devices, as well as integration with Azion. It is necessary to install our agent so that we can orchestrate your configurations and ensure secure communication between devices and Azion.
[See more](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-node)

---

### Edge Services

The Edge Services module enables the creation of the customer's own services. You can take your customized services to the Edge and ensure the management and orchestration on the devices via the control panel.
[See more](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-services)

---

## 3. Support documentation {#support-documentation}

- [Edge Node](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-node)
- [Edge Services](https://www.azion.com/en/documentation/products/edge-orchestrator/edge-services)

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
