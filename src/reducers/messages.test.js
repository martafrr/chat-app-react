import messages from './messages';
import * as types from '../constants/ActionTypes';

describe('Messages reducer', () => {
    it('should return the initial state, empty', () => {
        expect(message(undefined, {})).toEqual([])
    });

    it('should handle ADD_MESSAGE and store every message', () => {
        expect(
            messages([], {
                type: types.ADD_MESSAGE,
                message: 'Hey',
                author: 'Me'
            })
        ).toEqual([
            {
                message: 'Hey',
                author: 'Me'
            }
        ])

        expect(
            messages(
                [
                    {
                        message: 'Hey',
                        author: 'Me'
                    }
                ],
                {
                    type: types.ADD_MESSAGE,
                    message: 'Hey again',
                    author: 'Me again'
                }
            )
        ).toEqual([
            {
                message: 'Hey',
                author: 'Me again'
            },
            {
                message: 'Hey again',
                author: 'Me again'
            }
        ])
    });
});