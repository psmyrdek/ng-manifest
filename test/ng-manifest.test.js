const snapshot = require('./data/ng-manifest.json')
const generated = require('./ng-test-app/dist/ng-manifest.json')

test('ng-manifest snapshot should match newly generated one', () => {
    expect(generated).toEqual(snapshot);
})