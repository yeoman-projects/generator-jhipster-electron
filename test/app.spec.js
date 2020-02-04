const path = require('path');
const fse = require('fs-extra');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

// const dir = 'electron-war-package/';
const filesGenerated = ['electron.app.config.json', 'icon.png', 'index.html', 'main.js', 'package.json', 'README.md'];
const messageTest = 'generation electron package folder with files';

describe('JHipster generator electron', () => {
    describe('Test with Maven and AngularX', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/maven-angularX'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    message: 'simple message to say hello'
                })
                .on('end', done);
        });

        it(messageTest, () => {
            assert.file(filesGenerated);
        });
    });

    describe('Test with Gradle and Angular1', () => {
        beforeEach(done => {
            helpers
                .run(path.join(__dirname, '../generators/app'))
                .inTmpDir(dir => {
                    fse.copySync(path.join(__dirname, '../test/templates/gradle-react'), dir);
                })
                .withOptions({
                    testmode: true
                })
                .withPrompts({
                    message: 'simple message to say hello'
                })
                .on('end', done);
        });

        it(messageTest, () => {
            assert.file(filesGenerated);
        });
    });
});
