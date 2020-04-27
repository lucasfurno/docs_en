# Access **Permissions**

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

1. With an account with administrator privileges (admin), access [Real-Time Manager](https://manager.azion.com/login/?next=/) and enter the Your Account menu in the upper right section of the header.
2. Select the Teams menu.
3. Edit or add a Team.
4. Confirm View/Edit Edge Firewall or View/Edit Network Lists permissions.
5. Click Save to save the configuration.
6. Access Users in the same menu.
7. Edit or add a User.
8. Add the teams whose permissions the user will inherit.
9. Click Save to save the configuration.

---

Didn't find what you were looking for? [Open a ticket.](https://tickets.azion.com/)

[Edit this page](https://github.com/aziontech/docs_en/edit/master/edge-caching/acess-permissions/index.md) on GitHub.