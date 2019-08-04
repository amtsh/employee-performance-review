import { success, notFound } from '../../services/response/'
import { Employee } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Employee.create(body)
    .then((employee) => employee.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Employee.count(query)
    .then(count => Employee.find(query, select, cursor)
      .then((employees) => ({
        count,
        rows: employees.map((employee) => employee.view())
      }))
    )
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Employee.findById(params.id)
    .then(notFound(res))
    .then((employee) => employee ? employee.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Employee.findById(params.id)
    .then(notFound(res))
    .then((employee) => employee ? Object.assign(employee, body).save() : null)
    .then((employee) => employee ? employee.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Employee.findById(params.id)
    .then(notFound(res))
    .then((employee) => employee ? employee.remove() : null)
    .then(success(res, 204))
    .catch(next)
