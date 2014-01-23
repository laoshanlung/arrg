## Arrg!!!
This is your sound when you have to deal with arguments (parameters) in Javascript. Although, I love to work with Javascript, but sometimes the arguments system got out of my control and I was like "where the heck was that param coming form?"

## The Idea
The idea of this little library is to make working with arguments (for functions or methods) a bit easier by providing a utility to extract arguments so that they can be consistent across the project

## How?
```javascript
function pickThat() {
  var args = arrg(arguments, ['what', 'where']);
}

pickThat('duck', 'near the pack'); // now args becomes {what: 'duck', where: 'near the pack'}
```
How is it considered convinient and consistent for the project? Imaging that you have another developer joining your project and he is so in love with passing objects everywhere. So the above function still works as expected

```javascript
pickThat({what: 'alligator', where: 'the zoo'}); // args now has {what: 'alligator', where: 'the zoo'}
```

Still not convinced? Now, what if you want to have default values? Right, default values are sweet and handy
```javascript
function pickThat() {
  var args = arrg(arguments, ['what', 'where'], {what: 'bear', where: 'Finland'});
}

pickThat('bear'); // now args becomes {what: 'bear', where: 'Finland'}, not sure if Finland has bears, though
```

Want more? Read `tests.js`

## Development
Just read `Gruntfile.js`

## License
Who cares? (seriously?, contact me if you actually care)