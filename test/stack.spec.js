import test from 'ava';
import Stack from '../src/stack'

test('Stack', t => {
    const name = 'test';
    const stack = new Stack(name);
    t.is(stack.name, name);
})

// test('bar', async t => {
//     const bar = Promise.resolve('bar');
//     t.is(await bar, 'bar');
// })