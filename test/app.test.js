import test from 'ava';
import Morse from '../src/Morse';

test('it converts a letter into morse', t => {
	const morse = new Morse();
	t.is(morse.convert('E'), '.');
});

test('it converts a word into morse', t => {
	const morse = new Morse();
	t.is(morse.convert('Hello'), '.... . .-.. .-.. ---');
});

test('it converts a phrase into morse', t => {
	const morse = new Morse();
	t.is(
		morse.convert('Hello world this is me'),
		'.... . .-.. .-.. --- / .-- --- .-. .-.. -.. / - .... .. ... / .. ... / -- .'
	);
});

test('it converts numbers to morse', t => {
	const morse = new Morse();
	t.is(
		morse.convert('0 1 2 3 4 5 6 7 8 9'),
		'----- / .---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----.'
	);
})
