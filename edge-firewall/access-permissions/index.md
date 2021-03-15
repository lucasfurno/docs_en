---
layout: page-documentation-md
title: pages.docs_edge_firewall_access_permissions.title
description: pages.docs_edge_firewall_access_permissions.description
meta_tags: pages.docs_edge_firewall_access_permissions.meta_tags

namespace:     documentation_products_edge_firewall_access_permissions

permalink:      /documentation/products/edge-firewall/access-permissions/
permalink_en:   /documentation/products/edge-firewall/access-permissions/
permalink_pt-br:   /documentacao/produtos/edge-firewall/permissoes-de-acesso/
---
# Access **Permissions**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-firewall/access-permissions/index.md)

Edge Firewall uses the Real-Time Manager per-team permissions system. This way, you have more flexibility when defining the functions and roles of users and teams.

> 1. [Hands-on](#hands-on)

---

## 1. Hands-on. Configuring access permissions for Azion Edge Firewall {#hands-on}

Each user in Real-Time Manager can be associated with teams and, for each team, you can assign access permissions:

* View Edge Firewall: grants permission to view Edge Firewall Rule Sets, but does not allow creation, removal or modification.
* Edit Edge Firewall: grants permission to view, create, edit and remove Rule Sets from Edge Firewall.
* View Network Lists: grants permission to view Network Lists, but does not allow creation, removal or modification.
* Edit Network Lists: grants permission to view, create, edit and remove Network Lists.
* View Security Settings: grants permission to view WAF Rule Sets and Digital Certificates (with the exception of the private key), but does not allow creation, removal or modifications.
* Edit Security Settings: grants permission to view, create, edit and remove WAF Rule Sets and Digital Certificates.

To configure Edge Firewall permissions:

1. With an account with administrator privileges (admin), access [Real-Time Manager](https://manager.azion.com/) and enter the Your Account menu in the upper right section of the header.
2. Select the Teams menu.
3. Edit or add a Team.
4. Confirm View/Edit Edge Firewall or View/Edit Network Lists permissions.
5. Click Save to save the configuration.
6. Access Users in the same menu.
7. Edit or add a User.
8. Add the teams whose permissions the user will inherit.
9. Click Save to save the configuration.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
