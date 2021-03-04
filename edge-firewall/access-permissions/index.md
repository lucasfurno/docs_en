# Access **Permissions**

[Edit on GitHub <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="#F3652B"><path d="M4.81.71H.672v11.43H12.1V8.001" stroke-width=".8"/><path d="M6.87.786h5.155V5.94M6.31 6.5L12.026.786"/></g></svg>](https://github.com/aziontech/docs_en/edit/master/edge-firewall/access-permissions/index.md)

*Edge Firewall* uses the Real-Time Manager per-team permissions system. This way, you have more flexibility when defining the functions and roles of users and teams.

### Users and teams

#### **Each user in Real-Time Manager can be associated with teams. You can assign the following access permissions for each team:**

| Access                 | Permission                                                   |
| ---------------------- | ------------------------------------------------------------ |
| View Edge Firewall     | It grants permission to view Edge Firewall Rule Sets, but does not allow creation, removal or modification. |
| Edit Edge Firewall     | It grants permission to view, create, edit and remove Rule Sets from Edge Firewall. |
| View Network Lists     | It grants permission to view Network Lists, but does not allow creation, removal or modification. |
| Edit Network Lists     | It grants permission to view, create, edit and remove Network Lists. |
| View Security Settings | It grants permission to view WAF Rule Sets and Digital Certificates (with the exception of the private key), but does not allow creation, removal or modifications. |
| Edit Security Settings | It grants permission to view, create, edit and remove WAF Rule Sets and Digital Certificates. |

#### **How to configure Edge Firewall permissions:**

1. Access [Real-Time Manager](https://manager.azion.com/) with an administrator account  privilege (admin) and go to the *Account* menu on  the header's top right section;

2. Select the *Teams* menu;

3. Edit existing teams or add a new team in *Add team*;

4. Add a name for your team if you are creating a new team.

5. Confirm *View/Edit Edge Firewall* or *View/Edit Network Lists*;

6. Select the *Active* field to activate your selection;

7. Click the *Save* button to save your configuration.

8. Access *Users* in the same menu.

9. Edit existing users or add a User in *Add User*;

10. Fill in the fields in *User profile* and *Contact information* in case you add new users;

11. In *Security Settings*, leave the *Account owner* field activated or deactivated according to the desired access permission for each user:

    > Account owner: Full access to all resources, including account management and solutions.
    >
    > Non-owner: Restricted access to the solution management, based on the teams' permissions.

12. Add the teams whose permissions the user will inherit.

13. Click the  *Save* button to save your configuration.

    > If you want to add an extra security layer to your account, enable the *Multi-Factor Authentication field*.

---

Didn't find what you were looking for? [Open a support ticket.](https://tickets.azion.com/)
