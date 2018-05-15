import users from './users'
import * as types from '../constants/ActionTypes'

describe('Users reducer', () => {
  it('should return the initial state, empty', () => {
    expect(users(undefined, {})).toEqual([])
  })

  it('should handle ADD_USER and store every user', () => {
    expect(
      users([], {
        type: types.ADD_USER,
          name: 'Marta'
      })
    ).toEqual([
      {
          name: 'Marta'
      }
    ])

    expect(
      users(
        [
          {
            name: 'Marta',
          }
        ],
        {
          type: types.ADD_USER,
          name: 'Anna'
        }
      )
    ).toEqual([
      {
        name: 'Marta',
      },
      {
        name: 'Anna'
      }
    ])
  })
})