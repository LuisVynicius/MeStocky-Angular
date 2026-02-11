# Mestocky

Mestocky is a locally operated inventory management system designed to give full control to the administrators responsible for its maintenance. It aims to support any type of inventory, offering practicality, security, and flexibility.

## Login
The first access to the system is done using the default credentials provided during installation. After logging in for the first time, it is recommended to change the password to ensure security.

```
Email: admin@gmail.com
Password: 123
```
## Roles
The system uses access levels to ensure organization and control:

- Administrator: Has full control over the system. Only one user can hold this role.
- Manager: Can perform almost all system actions, except removing the administrator.
- Operator: Can add, remove, edit, and view products, as well as access reports.
- Viewer: Limited to viewing products and reports.

## Pages

- /login: Authentication screen using email and password.
- /stock: Main inventory page. Allows adding, editing, removing, and viewing products. Also displays low-stock alerts.
- /admin: Restricted area for Administrators and Managers, dedicated to general system administration.
- /profile: Page for updating basic information of the logged-in user.
- /report: Page dedicated to reports of stock movements and quantity adjustments.

## System Administration

Administrators and Managers have access to the /admin page, where they can manage:

- Users: Add/Remove and View.
- Product categories: Add/Remove/View and Edit.
- Reasons for product quantity adjustments: Add/Remove/View and Edit.

Adjustment reasons are defined by administrators and used to justify movements within the inventory.

### Exemplos

- Reasons:
  - Sale
  - Defective product
  - Refund
  - Adjustment
- Categories:
  - Computers
  - Fruits
  - Materials

## Information About Removing Reasons and Categories
Removing Reasons and Categories depends directly on the entities that reference them. This prevents the system from ending up with broken references.

To remove a Category, you must ensure no product is still linked to it. This can be done in two ways:

- Remove the products that use that category; or
- Edit those products and assign another category before removal.

To remove a Reason, it must not be associated with any report. There are two ways to free a reason:

- Delete the product related to the reports, which also removes all reports linked to it; or
- Change the reason in each report that still uses it, until no record references it anymore.