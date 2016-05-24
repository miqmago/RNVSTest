import { here } from 'src/something'; // <-- This won't work
// import { here } from '../something'; // <-- This works

export default function settings() {
    console.log('this is not working, try to make cmd+click on "here" or "src/something"');
    console.log('Replace "src/something" with "../something" to make it work');
    something.here();
}
