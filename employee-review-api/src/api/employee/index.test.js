import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Employee } from '.'

const app = () => express(apiRoot, routes)

let employee

beforeEach(async () => {
  employee = await Employee.create({})
})

test('POST /employees 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ fullname: 'test', email: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.fullname).toEqual('test')
  expect(body.email).toEqual('test')
})

test('GET /employees 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body.rows)).toBe(true)
  expect(Number.isNaN(body.count)).toBe(false)
})

test('GET /employees/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${employee.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employee.id)
})

test('GET /employees/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /employees/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${employee.id}`)
    .send({ fullname: 'test', email: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(employee.id)
  expect(body.fullname).toEqual('test')
  expect(body.email).toEqual('test')
})

test('PUT /employees/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ fullname: 'test', email: 'test' })
  expect(status).toBe(404)
})

test('DELETE /employees/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${employee.id}`)
  expect(status).toBe(204)
})

test('DELETE /employees/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
