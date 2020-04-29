module.exports = {
  name: 'hyper-vman',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hyper-vman',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
