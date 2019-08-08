### Applause tool, for performance reviews

Applause is a tool for performance reviews, where an administrator/manager can assign employees in her team to review an employee. An employee sees assigned reviews and can submit feedback.

##### For Administrator, it allows to

- Add/remove/view employees
- Add/view performance reviews
- Assign employees to participate in another employee's performance review
- View status of reviews, pending/completed

##### For Employee user, it allows to

- List of performance reviews requiring feedback
- Submit feedback

#### Technologies used :

Backend

- Nodejs for API server
- MongoDb Database

Frontend

- React UI library
- Redux for state management

#### High Level design

**Client** (React-Redux) => **Rest API** (Nodejs) => **Database** (MongoDB)

##### Frontend :

React is used to build the components that constitute a webpage view for

- Employee user
- Admin user

Redux is used to manage application state. It manages a data store where the data fetched from the API is stored for the components to access.

##### API :

The RESTful API built using Nodejs, exposes CRUD endpoints for the resources Employee, Review.

**Endpoints for EMPLOYEE Resource**

```
GET /api/v1/employees
POST /api/v1/employees
PUT /api/v1/employees/:employee_id
GET /api/v1/employees/:employee_id
DELETE /api/v1/employees/:employee_id
```

**Endpoints for REVIEW Resource**

```
GET /api/v1/reviews
POST /api/v1/reviews
PUT /api/v1/reviews/:review_id
GET /api/v1/reviews/:employee_id
GET /api/v1/reviews?q_reviewee=employee_email
GET /api/v1/reviews?q_reviewer=employee_email
DELETE /api/v1/reviews/:review_id
```

##### Database :

```javascript
Employee Schema
{
  id: String,
  fullname: String,
  email: String
}

Review Schema
{
  id: String,
  review_text: String,
  is_complete: String,
  reviewee: Reference to Employee,
  reviewer: Reference to Employee
}
```
