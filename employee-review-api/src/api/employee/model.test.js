import { Employee } from '.'

let employee

beforeEach(async () => {
  employee = await Employee.create({ fullname: 'test', email: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = employee.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employee.id)
    expect(view.fullname).toBe(employee.fullname)
    expect(view.email).toBe(employee.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = employee.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(employee.id)
    expect(view.fullname).toBe(employee.fullname)
    expect(view.email).toBe(employee.email)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
